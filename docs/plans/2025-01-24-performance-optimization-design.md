# Performance Optimization Design - Deep Architecture Changes

**Date:** 2025-01-24
**Goal:** Make website smoother and faster through comprehensive architectural improvements
**Approach:** Deep code architecture changes with server components, image optimization, code splitting, and streaming
**Expected Impact:** 40-60% improvement in load times, smoother animations, reduced bundle sizes

## Current Performance Baseline

### Bundle Sizes (Before Optimization)
- Homepage: 168 KB First Load JS
- Projects [slug]: 276 KB First Load JS (largest)
- Market pages: ~130-143 KB First Load JS
- Shared JS: 106 KB

### Key Issues Identified
1. **Images unoptimized**: 90+ PNG/JPG images, no WebP, no lazy loading
2. **Large bundles**: Projects page at 276KB due to react-slick and Mantine UI loaded upfront
3. **Excessive client components**: Many pages use 'use client' unnecessarily
4. **No code splitting**: Heavy components loaded on initial page load
5. **Images disabled**: `unoptimized: true` in next.config

## Section 1: Server Components Architecture

### Strategy
Convert client components to server components where possible to reduce JavaScript bundle size and improve rendering speed.

### Changes

#### Homepage (`src/app/page.tsx`)
**Current State:**
- Client component using `'use client'`
- Uses `useRouter` for navigation
- All content rendered client-side

**New Implementation:**
- Convert to server component
- Move navigation logic into individual client components
- Keep interactive parts (carousel buttons, navigation) as separate client components
- Schema scripts remain as inline JSON-LD
- Server-side data fetching for project and market data

**Code Structure:**
```typescript
// Server component (default)
export default async function Home() {
  // Server-side data fetching
  const projects = ProjectData.projects.slice(0, 2);
  const market = Market.market;

  return (
    <>
      <HeroSection />
      <AboutSection />

      {/* Client components for interactivity */}
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}

      <ProductCarousel products={market} />
    </>
  );
}
```

#### Market Landing (`src/app/market/page.tsx`)
**Current State:**
- Client component with non-functional metadata export
- Falls back to root layout metadata

**New Implementation:**
- Convert to server component
- Add proper `generateMetadata` export
- Server-side rendering of market cards
- Only interactive card elements stay client-side

**Benefits:**
- Proper page-specific metadata
- Reduced JavaScript payload
- Faster initial render

#### Keep as Server Components
- `src/app/projects/[slug]/page.tsx` - Already converted during SEO optimization
- `src/app/market/[slug]/page.tsx` - To be converted

### Expected Benefits
- 30-40% reduction in JavaScript bundle size
- Faster Time to Interactive (TTI)
- Better SEO with server-rendered content
- Streaming support for progressive loading
- Reduced hydration time

## Section 2: Image Optimization & Modern Formats

### Strategy
Enable Next.js Image Optimization and convert all images to modern formats with lazy loading.

### Current State Issues
```typescript
// next.config.ts - CURRENT (disabled)
images: {
  unoptimized: true, // Disables all image optimization!
}
```

- All images are raw PNGs/JPGs
- No lazy loading
- No responsive sizes
- No blur-up placeholders
- 90+ images totaling significant bandwidth

### New Configuration

```typescript
// next.config.ts - NEW
images: {
  unoptimized: false, // Enable optimization
  formats: ['image/webp', 'image/avif'], // Modern formats
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60,
}
```

### Image Component Updates

**Replace all `<img>` and raw `<Image>` tags with optimized Next.js Image:**

```typescript
// Before
<img src="/images/fr.png" alt="Faiz Rhm" />

// After
<Image
  src="/images/fr.png"
  alt="Faiz Rhm"
  width={500}
  height={500}
  priority={true} // For above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..." // Generated automatically
/>
```

### Priority Loading Strategy

**Above-the-fold (priority=true):**
- Hero image (`/images/fr.png`)
- Review section images
- First project card cover image

**Below-the-fold (lazy load):**
- Product carousel images
- Additional project images
- Market card images
- Footer images

### Expected Benefits
- 60-70% reduction in image bandwidth
- Faster LCP (Largest Contentful Paint)
- Automatic format negotiation (WebP/AVIF for modern browsers, fallback to PNG/JPG)
- Built-in lazy loading
- Blur-up effect for better perceived performance
- Responsive images with srcset
- CDN-optimized delivery

## Section 3: Code Splitting & Dynamic Imports

### Strategy
Split heavy components and load them on demand to reduce initial bundle size.

### Current Issues
- Projects page: 276 KB (too large)
- react-slick carousel: ~50 KB loaded upfront
- Mantine UI components: Large bundle
- No dynamic imports

### Implementation

#### 1. Dynamic Import for React Slick Carousel

```typescript
// src/components/projects/ProjectSlider.tsx
import dynamic from 'next/dynamic';

const Slider = dynamic(() => import('react-slick'), {
  ssr: false, // Carousel doesn't need SSR
  loading: () => <div className="skeleton-slider">Loading...</div>
});
```

**Benefits:**
- ~50KB not loaded until carousel is needed
- Faster initial page load
- Better TTI

#### 2. Component-Level Code Splitting

**Homepage:**
```typescript
import dynamic from 'next/dynamic';

const ProductCarousel = dynamic(() => import('@/components/others/ProductCarousel'), {
  loading: () => <CarouselSkeleton />
});

const Reviews = dynamic(() => import('@/components/others/Review'), {
  loading: () => <ReviewsSkeleton />
});
```

**Market Page:**
```typescript
const MarketCard = dynamic(() => import('@/components/others/MarketCard'));
```

#### 3. Route Prefetching Strategy

```typescript
// Prefetch critical routes on hover
<Link
  href={`/projects/${project.slug}`}
  prefetch={true} // Prefetch on hover
>
```

**Prefetch Priority:**
1. High: Project detail pages (from homepage)
2. Medium: Market pages
3. Low: Static pages (about, services)

#### 4. Tree-Shaking Mantine UI

```typescript
// Before (large bundle)
import { Button, Text, Space, Container } from '@mantine/core';

// After (tree-shaken)
import { Button } from '@mantine/core/Button';
import { Text } from '@mantine/core/Text';
import { Space } from '@mantine/core/Space';
import { Container } from '@mantine/core/Container';
```

### Expected Results
- Homepage: 168KB → ~110KB (-35%)
- Projects page: 276KB → ~180KB (-35%)
- Market page: 143KB → ~95KB (-35%)
- Faster navigation between pages
- Improved TTI by 30-40%

## Section 4: Streaming & Suspense Boundaries

### Strategy
Implement progressive page rendering with React Suspense to show content as it becomes available.

### Current Behavior
- Pages wait for all data before rendering anything
- Blank screen during data fetching
- Poor perceived performance

### New Implementation

#### Homepage with Suspense

```typescript
import { Suspense } from 'react';

export default async function Home() {
  return (
    <>
      <HeroSection /> {/* Renders immediately */}
      <AboutSection /> {/* Renders immediately */}

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews />
      </Suspense>

      <Suspense fallback={<CarouselSkeleton />}>
        <ProductCarousel products={Market.market} />
      </Suspense>

      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectsSection />
      </Suspense>
    </>
  );
}
```

#### Project Detail Page with Streaming

```typescript
// src/app/projects/[slug]/page.tsx
export default async function ProjectsDetails({ params }) {
  const { slug } = await params;
  const project = ProjectData.projects.find(p => p.slug === slug);

  return (
    <>
      {/* Renders immediately */}
      <ProjectHeader
        name={project.name}
        description={project.description}
      />

      {/* Streams when ready */}
      <Suspense fallback={<ImagesSkeleton />}>
        <ProjectImages images={project.images} />
      </Suspense>

      <Suspense fallback={<ContentSkeleton />}>
        <ProjectContent project={project} />
      </Suspense>

      <Suspense fallback={<RelatedProjectsSkeleton />}>
        <RelatedProjects tag={project.tag} />
      </Suspense>
    </>
  );
}
```

#### Market Page with Suspense

```typescript
export default async function MarketPage() {
  return (
    <>
      <MarketHeader /> {/* Immediate */}

      <Suspense fallback={<MarketGridSkeleton />}>
        <MarketGrid items={Market.market} />
      </Suspense>
    </>
  );
}
```

### Skeleton Components

Create loading skeletons that match actual content dimensions:

```typescript
// components/skeletons/ReviewsSkeleton.tsx
export function ReviewsSkeleton() {
  return (
    <div className="reviews-skeleton">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="skeleton-card shimmer">
          <div className="skeleton-image" />
          <div className="skeleton-text" />
        </div>
      ))}
    </div>
  );
}
```

**Skeleton CSS with Shimmer Effect:**
```css
.shimmer {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

### Expected Benefits
- Show content progressively (better perceived performance)
- Faster First Contentful Paint (FCP)
- Better user experience (no blank screen)
- Handles slow network gracefully
- Improved Core Web Vitals scores
- Smooth skeleton → content transitions

## Implementation Summary

### Files to Modify
1. `next.config.ts` - Enable image optimization
2. `src/app/page.tsx` - Convert to server component, add Suspense
3. `src/app/market/page.tsx` - Convert to server component
4. `src/app/market/[slug]/page.tsx` - Convert to server component
5. `src/app/projects/[slug]/page.tsx` - Add Suspense boundaries
6. All components with images - Convert to Next.js Image component
7. Create skeleton components for loading states
8. Add dynamic imports for heavy components

### New Files to Create
- `src/components/skeletons/ReviewsSkeleton.tsx`
- `src/components/skeletons/CarouselSkeleton.tsx`
- `src/components/skeletons/ProjectsSkeleton.tsx`
- `src/components/skeletons/MarketGridSkeleton.tsx`
- `src/components/skeletons/ImagesSkeleton.tsx`
- `src/components/skeletons/ContentSkeleton.tsx`

### Expected Performance Improvements

**Load Time Metrics:**
- First Contentful Paint: -40%
- Largest Contentful Paint: -60% (image optimization)
- Time to Interactive: -35% (code splitting)
- Total Blocking Time: -30% (streaming)

**Bundle Size Reductions:**
- Homepage: 168KB → 110KB (-35%)
- Projects page: 276KB → 180KB (-35%)
- Market page: 143KB → 95KB (-35%)

**User Experience:**
- Smoother animations (60fps)
- Progressive content loading
- Faster perceived performance
- Better mobile performance

## Testing Strategy

1. **Performance Testing:**
   - Lighthouse audits before/after
   - WebPageTest.org analysis
   - Chrome DevTools performance profiling

2. **Visual Regression:**
   - Ensure images display correctly
   - Verify skeleton animations
   - Check responsive breakpoints

3. **Functionality Testing:**
   - Test all navigation flows
   - Verify carousel functionality
   - Check form submissions
   - Test on slow 3G network

4. **Cross-Browser Testing:**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers (iOS Safari, Chrome Mobile)
   - Verify WebP/AVIF fallbacks work

## Rollout Plan

1. **Phase 1:** Image optimization (quick win)
2. **Phase 2:** Code splitting (moderate complexity)
3. **Phase 3:** Server components conversion (higher complexity)
4. **Phase 4:** Streaming & Suspense (polish)

## Success Criteria

- Lighthouse Performance Score: 90+ (currently ~70)
- LCP < 2.5s (currently ~4s)
- FCP < 1.8s (currently ~2.5s)
- TTI < 3.8s (currently ~5.5s)
- Bundle size reduction: 30%+ across all pages
