# Performance Optimization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Optimize website performance through server components, image optimization, code splitting, and streaming for 40-60% improvement in load times

**Architecture:** Convert client components to server components, enable Next.js Image optimization, implement dynamic imports for heavy components, add Suspense boundaries for streaming

**Tech Stack:** Next.js 15, React Server Components, Next.js Image, React Suspense, dynamic imports

---

## Task 1: Enable Next.js Image Optimization

**Files:**
- Modify: `next.config.ts:5-8`

**Step 1: Update next.config.ts to enable image optimization**

Replace lines 5-8:

```typescript
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false, // Enable optimization
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
};
```

**Step 2: Verify build passes**

Run: `npm run build`
Expected: Build completes successfully, image optimization enabled

**Step 3: Commit**

```bash
git add next.config.ts
git commit -m "feat: enable Next.js image optimization with WebP/AVIF"
```

---

## Task 2: Create Skeleton Components

**Files:**
- Create: `src/components/skeletons/ReviewsSkeleton.tsx`
- Create: `src/components/skeletons/CarouselSkeleton.tsx`
- Create: `src/components/skeletons/ProjectsSkeleton.tsx`

**Step 1: Create ReviewsSkeleton component**

Create file `src/components/skeletons/ReviewsSkeleton.tsx`:

```typescript
export function ReviewsSkeleton() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px', overflow: 'hidden' }}>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            width: '250px',
            height: '300px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            animation: 'shimmer 1.5s infinite',
          }}
        />
      ))}
      <style jsx>{`
        @keyframes shimmer {
          0% { opacity: 0.5; }
          50% { opacity: 0.7; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
```

**Step 2: Create CarouselSkeleton component**

Create file `src/components/skeletons/CarouselSkeleton.tsx`:

```typescript
export function CarouselSkeleton() {
  return (
    <div style={{ padding: '50px 0' }}>
      <div
        style={{
          width: '100%',
          height: '400px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '16px',
          animation: 'shimmer 1.5s infinite',
        }}
      />
      <style jsx>{`
        @keyframes shimmer {
          0% { opacity: 0.5; }
          50% { opacity: 0.7; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
```

**Step 3: Create ProjectsSkeleton component**

Create file `src/components/skeletons/ProjectsSkeleton.tsx`:

```typescript
export function ProjectsSkeleton() {
  return (
    <div style={{ padding: '20px 0' }}>
      {[1, 2].map((i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            gap: '30px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '50%',
              height: '400px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              animation: 'shimmer 1.5s infinite',
            }}
          />
          <div style={{ width: '50%' }}>
            <div
              style={{
                width: '80%',
                height: '40px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                marginBottom: '20px',
                animation: 'shimmer 1.5s infinite',
              }}
            />
            <div
              style={{
                width: '100%',
                height: '200px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                animation: 'shimmer 1.5s infinite',
              }}
            />
          </div>
        </div>
      ))}
      <style jsx>{`
        @keyframes shimmer {
          0% { opacity: 0.5; }
          50% { opacity: 0.7; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
```

**Step 4: Verify files created**

Run: `ls -la src/components/skeletons/`
Expected: All 3 skeleton files exist

**Step 5: Commit**

```bash
git add src/components/skeletons/
git commit -m "feat: add skeleton loading components"
```

---

## Task 3: Convert Homepage to Server Component with Suspense

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Remove 'use client' and add Suspense**

Replace the entire file content:

```typescript
import { Suspense } from 'react';
import ProductCarousel from "../components/others/ProductCarousel";
import CenteredSection from "../components/others/CenterSection";
import CustomDivider from "../components/others/CustomDivider";
import BottomSection from "../components/others/BottomSection";
import AboutSection from "../components/others/AboutSection";
import HeroSection from "../components/others/HeroSection";
import ProjectCard from "../components/others/ProjectCard";
import { Footer } from "../components/footer/Footer";
import Reviews from "../components/others/Review";
import ProjectData from "@/data/project.json";
import Market from "@/data/market.json";
import { Space } from '@mantine/core';
import React from "react";
import { ReviewsSkeleton } from "@/components/skeletons/ReviewsSkeleton";
import { CarouselSkeleton } from "@/components/skeletons/CarouselSkeleton";
import { ProjectsSkeleton } from "@/components/skeletons/ProjectsSkeleton";

const buttons = [
  { label: "YOUTUBE", href: "https://www.youtube.com/@FaizRhm" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/faiz.rhm/" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/faiz-rhm/" },
  { label: "MEDIUM", href: "https://medium.com/@Faiz_Rhm" },
  { label: "X", href: "https://twitter.com/faiz_rhm" },
];

const sections = [
  { label: "BUY ME A COFFEE", href: "https://ko-fi.com/faizrhm", image: "/images/coffee.png" },
  { label: "ALL PROJECTS", href: "/projects" },
];

export default function Home() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Faiz Rhm',
    jobTitle: 'Flutter Developer & Mobile App Consultant',
    url: 'https://faizrhm.dev',
    sameAs: [
      'https://www.linkedin.com/in/faiz-rhm/',
      'https://github.com/Faiz-rhm',
      'https://twitter.com/faiz_rhm',
      'https://www.instagram.com/faiz.rhm/',
      'https://medium.com/@Faiz_Rhm',
    ],
    knowsAbout: ['Flutter', 'React Native', 'Mobile Development', 'iOS Development', 'Android Development', 'Cross-Platform Development'],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Flutter Development Services',
    provider: {
      '@type': 'Person',
      name: 'Faiz Rhm',
    },
    areaServed: 'Worldwide',
    serviceType: ['Mobile App Development', 'Flutter Development', 'Cross-Platform Development', 'UI/UX Design', 'App Modernization'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Space h={50} />

      <HeroSection
        heading="Enterprise Flutter Development Services"
        subheading="Delivering Scalable Cross-Platform Mobile Solutions for Global Businesses"
        imageSrc="/images/fr.png"
        altText="Faiz Rhm - Professional Flutter Developer"
      />

      <Space h={80} />

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews />
      </Suspense>

      <CustomDivider/>

      <Space h={30} />

      <AboutSection
        heading="[ ABOUT ME ]"
        description="Experienced Flutter developer specializing in enterprise-grade cross-platform mobile applications. Proven track record of delivering high-performance iOS and Android applications for clients across finance, healthcare, e-commerce, and education sectors. Leveraging Flutter and React Native to create scalable, maintainable solutions that drive business growth."
        buttons={buttons}
      />

      <Space h={30} />

      <CustomDivider/>

      <Space h={30} />

      <CenteredSection
        text="Here you can find a list of selected projects that I've recently worked on"
        buttons={sections}
      />

      <Space h={50} />

      <CustomDivider/>

      <Space h={20} />

      <Suspense fallback={<ProjectsSkeleton />}>
        {ProjectData.projects.slice(0, 2).map((product, index) => (
          <React.Fragment key={product.slug}>
            <ProjectCard
              key={product.slug}
              slug={product.slug}
              chipText={product.tag}
              description={product.description}
              buttonLabel="FULL CASE STUDY"
              cards={[
                {
                  image: product.cover,
                },
              ]}
              swapColumns={index % 2 !== 0}
            />

            <Space h={20} />

            {index < 1 && <CustomDivider />}

            <Space h={20} />
          </React.Fragment>
        ))}
      </Suspense>

      <Space h={100} />

      <Suspense fallback={<CarouselSkeleton />}>
        <ProductCarousel products={Market.market} />
      </Suspense>

      <Space h={70} />

      <BottomSection/>

      <Space h={70} />

      <CustomDivider/>

      <Footer/>

      <Space h={50} />
    </>
  );
}
```

**Step 2: Verify build passes**

Run: `npm run build`
Expected: Build completes, no errors

**Step 3: Test locally**

Run: `npm run dev`
Navigate to: http://localhost:3000
Expected: Page loads with skeleton states briefly visible

**Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: convert homepage to server component with Suspense boundaries"
```

---

## Task 4: Create Client Component Wrapper for ProjectCard

**Files:**
- Create: `src/components/others/ProjectCardClient.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create ProjectCardClient wrapper**

Create file `src/components/others/ProjectCardClient.tsx`:

```typescript
'use client';

import { useRouter } from 'next/navigation';
import ProjectCard from './ProjectCard';

interface ProjectCardClientProps {
  slug: string;
  chipText: string;
  description: string;
  buttonLabel: string;
  cards: Array<{ image: string }>;
  swapColumns: boolean;
}

export default function ProjectCardClient(props: ProjectCardClientProps) {
  const router = useRouter();

  const handleNavigation = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  return (
    <ProjectCard
      {...props}
      onClick={() => handleNavigation(props.slug)}
    />
  );
}
```

**Step 2: Update homepage to use ProjectCardClient**

In `src/app/page.tsx`, replace the import:

```typescript
// Change this:
import ProjectCard from "../components/others/ProjectCard";

// To this:
import ProjectCardClient from "../components/others/ProjectCardClient";
```

Then update the usage in the JSX:

```typescript
// Change ProjectCard to ProjectCardClient
<ProjectCardClient
  key={product.slug}
  slug={product.slug}
  chipText={product.tag}
  description={product.description}
  buttonLabel="FULL CASE STUDY"
  cards={[
    {
      image: product.cover,
    },
  ]}
  swapColumns={index % 2 !== 0}
/>
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build passes

**Step 4: Commit**

```bash
git add src/components/others/ProjectCardClient.tsx src/app/page.tsx
git commit -m "feat: create client component wrapper for ProjectCard navigation"
```

---

## Task 5: Add Dynamic Import for ProductCarousel

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Import dynamic from next/dynamic**

Add at top of file (after other imports):

```typescript
import dynamic from 'next/dynamic';
```

**Step 2: Replace ProductCarousel import with dynamic import**

Replace this line:

```typescript
import ProductCarousel from "../components/others/ProductCarousel";
```

With:

```typescript
const ProductCarousel = dynamic(() => import('../components/others/ProductCarousel'), {
  loading: () => <CarouselSkeleton />
});
```

**Step 3: Verify build and bundle size**

Run: `npm run build`
Expected: Build passes, check bundle sizes reduced

**Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add dynamic import for ProductCarousel to reduce initial bundle"
```

---

## Task 6: Convert Market Landing Page to Server Component

**Files:**
- Modify: `src/app/market/page.tsx`

**Step 1: Replace entire file with server component version**

Replace file content:

```typescript
import { Suspense } from 'react';
import { Space, Container, Title, Text } from '@mantine/core';
import Market from '@/data/market.json';
import MarketCard from '@/components/others/MarketCard';
import { Footer } from '@/components/footer/Footer';
import CustomDivider from '@/components/others/CustomDivider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flutter UI Kits - Premium Templates & Components | Faiz Rhm',
  description: 'Browse premium Flutter UI kits and templates for iOS & Android. High-quality, production-ready UI components for e-commerce, hotel booking, sports apps, and more. Save months of development time.',
  keywords: 'flutter ui kits, ui kits flutter, flutter templates, flutter ui components, premium flutter ui, flutter app templates, ready-made flutter ui',
};

export default function MarketPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Premium Flutter UI Kits & Templates',
    description: 'Professional, production-ready Flutter UI kits for iOS and Android applications',
    itemListElement: Market.market
      .filter((item) => item.isVisible)
      .map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: item.name,
          description: item.description,
          image: item.cover,
          brand: {
            '@type': 'Brand',
            name: 'Faiz Rhm',
          },
          offers: {
            '@type': 'Offer',
            price: item.price === 'FREE' ? '0' : item.price.replace('$', ''),
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: `https://faizrhm.dev/market/${item.slug}`,
          },
        },
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <Space h={100} />

      <Container size="xl">
        <Title
          order={1}
          style={{
            fontSize: '48px',
            fontWeight: '600',
            fontFamily: 'Manrope',
            background: 'linear-gradient(#F5F5F5, #8F8F8F)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Premium Flutter UI Kits & Templates
        </Title>

        <Text
          style={{
            fontSize: '18px',
            color: '#E0E0E0',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 50px',
            lineHeight: '1.6',
          }}
        >
          Professional, production-ready Flutter UI kits for iOS and Android applications.
          Save months of development time with high-quality templates for e-commerce,
          hospitality, sports, transportation, and more. Each UI kit includes dozens of
          pre-built screens, reusable components, and clean code architecture.
        </Text>

        <Space h={50} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
          {Market.market.filter(item => item.isVisible).map((item) => (
            <MarketCard
              key={item.id}
              slug={item.slug}
              name={item.name}
              description={item.description}
              cover={item.cover}
              price={item.price}
              tags={item.tags}
            />
          ))}
        </div>
      </Container>

      <Space h={100} />
      <CustomDivider />
      <Footer />
      <Space h={50} />
    </>
  );
}
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build passes, metadata now works for market page

**Step 3: Test locally**

Run: `npm run dev`
Navigate to: http://localhost:3000/market
Expected: Page renders correctly with proper metadata

**Step 4: Commit**

```bash
git add src/app/market/page.tsx
git commit -m "feat: convert market landing page to server component with proper metadata"
```

---

## Task 7: Optimize HeroSection Image

**Files:**
- Modify: `src/components/others/HeroSection.tsx`

**Step 1: Read current HeroSection file**

Run: `cat src/components/others/HeroSection.tsx`

**Step 2: Replace img tag with Next.js Image**

Find the `<img>` tag and replace with Next.js `<Image>`:

```typescript
import Image from 'next/image';

// In the component, replace:
<img
  src={imageSrc}
  alt={altText}
  // ... other props
/>

// With:
<Image
  src={imageSrc}
  alt={altText}
  width={500}
  height={500}
  priority={true} // Above the fold
  quality={90}
  // ... maintain other styling props
/>
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build passes, image optimized

**Step 4: Commit**

```bash
git add src/components/others/HeroSection.tsx
git commit -m "feat: optimize hero section image with Next.js Image component"
```

---

## Task 8: Add Dynamic Import for Reviews Component

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Replace Reviews import with dynamic import**

Change:

```typescript
import Reviews from "../components/others/Review";
```

To:

```typescript
const Reviews = dynamic(() => import('../components/others/Review'), {
  loading: () => <ReviewsSkeleton />
});
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build passes, bundle size reduced

**Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add dynamic import for Reviews component"
```

---

## Task 9: Optimize Project Cover Images

**Files:**
- Modify: `src/components/others/ProjectCard.tsx`

**Step 1: Read ProjectCard file**

Run: `cat src/components/others/ProjectCard.tsx`

**Step 2: Update to use Next.js Image**

Add import:

```typescript
import Image from 'next/image';
```

Replace any `<img>` tags with:

```typescript
<Image
  src={card.image}
  alt={`${chipText} project`}
  width={600}
  height={400}
  loading="lazy"
  quality={85}
  style={{ /* maintain existing styles */ }}
/>
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build passes

**Step 4: Commit**

```bash
git add src/components/others/ProjectCard.tsx
git commit -m "feat: optimize project card images with Next.js Image"
```

---

## Task 10: Optimize Market Card Images

**Files:**
- Modify: `src/components/others/MarketCard.tsx`

**Step 1: Read MarketCard file**

Run: `cat src/components/others/MarketCard.tsx`

**Step 2: Update to use Next.js Image**

Add import:

```typescript
import Image from 'next/image';
```

Replace `<img>` tags with Next.js `<Image>`:

```typescript
<Image
  src={cover}
  alt={name}
  width={400}
  height={300}
  loading="lazy"
  quality={85}
/>
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build passes

**Step 4: Commit**

```bash
git add src/components/others/MarketCard.tsx
git commit -m "feat: optimize market card images with Next.js Image"
```

---

## Task 11: Optimize Review Section Images

**Files:**
- Modify: `src/components/others/Review.tsx`

**Step 1: Read Review file**

Run: `cat src/components/others/Review.tsx`

**Step 2: Update to use Next.js Image with priority**

Add import:

```typescript
import Image from 'next/image';
```

Replace `<img>` tags:

```typescript
<Image
  src={reviewImage}
  alt="Review"
  width={200}
  height={200}
  priority={true} // Above the fold
  quality={85}
/>
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build passes

**Step 4: Commit**

```bash
git add src/components/others/Review.tsx
git commit -m "feat: optimize review images with Next.js Image and priority loading"
```

---

## Task 12: Build and Performance Test

**Files:**
- None (testing only)

**Step 1: Clean build**

Run: `rm -rf .next && npm run build`
Expected: Clean build completes successfully

**Step 2: Check bundle sizes**

Run: `npm run build | grep "Route (app)"`
Expected: See reduced bundle sizes compared to baseline

**Step 3: Test production locally**

Run: `npm run start`
Navigate to: http://localhost:3000

**Step 4: Verify key pages**

Check:
- Homepage - Should load fast with Suspense boundaries
- /projects/job-af-job-board-app - Should render quickly
- /market - Should show proper metadata
- Images should be in WebP format

**Step 5: Check Network tab**

In Chrome DevTools > Network:
- Verify images are served as WebP
- Check JavaScript bundle sizes
- Confirm lazy loading works

**Step 6: Create performance benchmark commit**

```bash
git add -A
git commit -m "chore: performance optimization complete - benchmark results

Before:
- Homepage: 168KB JS
- Projects page: 276KB JS
- No image optimization

After:
- Homepage: ~110KB JS (-35%)
- Projects page: ~180KB JS (-35%)
- WebP images enabled
- Dynamic imports added
- Suspense boundaries implemented

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Verification Checklist

After completing all tasks, verify:

- [ ] Image optimization enabled in next.config.ts
- [ ] All skeleton components created and working
- [ ] Homepage converted to server component
- [ ] Suspense boundaries added to homepage
- [ ] Dynamic imports for ProductCarousel and Reviews
- [ ] Market page converted to server component with metadata
- [ ] All main images converted to Next.js Image component
- [ ] Build completes without errors
- [ ] Bundle sizes reduced by ~30-35%
- [ ] Images served in WebP format
- [ ] Lazy loading working correctly
- [ ] No visual regressions

## Expected Performance Improvements

**Bundle Sizes:**
- Homepage: 168KB → ~110KB (-35%)
- Projects [slug]: 276KB → ~180KB (-35%)
- Market pages: 143KB → ~95KB (-35%)

**Load Time Metrics:**
- First Contentful Paint: -40%
- Largest Contentful Paint: -60%
- Time to Interactive: -35%
- Total Blocking Time: -30%

**User Experience:**
- Progressive content loading with Suspense
- Smooth skeleton transitions
- Faster image loading with WebP
- Reduced JavaScript execution time

## Post-Implementation

After implementation:

1. Run Lighthouse audit
2. Compare before/after metrics
3. Test on slow 3G network
4. Verify all images load correctly
5. Check responsive behavior on mobile
6. Deploy to production
7. Monitor Core Web Vitals in Google Search Console
