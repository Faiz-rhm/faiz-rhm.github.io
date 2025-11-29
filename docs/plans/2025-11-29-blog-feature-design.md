# Blog Feature Design

**Date:** 2025-11-29
**Author:** Faiz Rhm & Claude Code
**Medium Profile:** https://medium.com/@Faiz_Rhm

## Overview

Add a blog section to the portfolio website that fetches and displays Medium articles within the site, maintaining design consistency with existing Projects and Market pages.

## 1. Page Structure & Navigation

### Blog Page Route
- **Path:** `/blog`
- **File:** `src/app/blog/page.tsx`

### Navigation Integration
- Add "BLOG" link to HeaderMenu after "MARKET"
- Final order: `HOME → PROJECTS → MARKET → BLOG`
- Update navigation arrays in `src/components/header/HeaderMenu.tsx`:
  - Lines 70-74 (desktop navigation)
  - Lines 194-198 (mobile drawer navigation)
- Include active state indicator (red dot) when on `/blog` route

### Page Layout Structure
```
├── HeroSection
│   ├── Heading: "Insights on Flutter development, UI/UX design, and mobile app best practices"
│   └── Subheading: "✍️ Articles & Tutorials"
├── Blog Article Cards (grid)
├── CustomDivider (between sections)
└── Footer
```

## 2. Data Fetching & Medium RSS Integration

### RSS Feed Configuration
- **Feed URL:** `https://medium.com/feed/@Faiz_Rhm`
- **Format:** XML
- **Parsing Library:** `rss-parser` or `fast-xml-parser`

### Data Flow
1. Blog page component fetches RSS feed on mount
2. Parse XML response into article objects
3. Extract required fields from RSS feed
4. Store in component state
5. Render BlogCard components

### Article Data Structure
```typescript
interface MediumArticle {
  title: string;           // Article title
  description: string;     // Article excerpt/summary
  link: string;           // Original Medium article URL
  pubDate: string;        // ISO date string
  thumbnail: string;      // Cover image URL
  categories: string[];   // Article tags
  readingTime: string;    // Estimated reading time
  slug: string;           // URL-friendly identifier
  content: string;        // Full HTML content
}
```

### Caching Strategy
- Client-side fetching on component mount
- Store in localStorage with 1-hour expiration timestamp
- Check cache age on subsequent visits
- Use cached data if < 1 hour old
- Show loading state only when fetching fresh data

### Technical Approach
- Use `'use client'` directive (consistent with existing pages)
- Client-side RSS fetching and parsing
- State management for articles array
- Loading and error states
- localStorage caching to reduce API calls

## 3. Blog Card Component Design

### Component: BlogCard
Similar to ProjectCard but adapted for blog articles.

### Card Layout Elements
- Large cover image (article thumbnail)
- Tag chips (article categories) - styled like project tags
- Article title (bold, prominent)
- Article description/excerpt
- Metadata section:
  - Publication date (formatted: "Nov 15, 2024")
  - Reading time ("5 min read")
- "READ ARTICLE" button (matching "FULL CASE STUDY" style)
- Alternating left/right layout using `swapColumns` pattern

### Click Behavior
- Navigate to `/blog/[slug]` (internal navigation)
- Uses Next.js router, not external links
- Slug generated from article title or Medium URL
- Analytics tracking (similar to existing trackCTAClick)

### Visual Consistency
- Mantine UI components (Box, Card, Badge, Button)
- Manrope font family
- Dark theme colors
- Spacing and CustomDivider between cards (like Projects page)

## 4. Blog Detail Page Implementation

### Route
- **Path:** `/blog/[slug]/page.tsx`
- **Type:** Dynamic route

### Data Fetching
- Fetch Medium RSS feed
- Find article by matching slug parameter
- Parse full content from `content:encoded` field

### Page Layout
```
├── Hero Section
│   ├── Article title (large heading)
│   ├── Tag chips
│   └── Metadata bar (date + reading time)
├── Article Content Area
│   ├── Full HTML content from Medium
│   ├── Preserved formatting (headings, lists, code, images)
│   └── Max-width container for readability
├── Navigation
│   └── "← Back to Blog" button
└── Footer
```

### Content Rendering
- Use `dangerouslySetInnerHTML` for Medium's HTML
- Sanitize HTML with `dompurify` library (prevent XSS)
- Apply custom CSS to match dark theme
- Override Medium's default styles
- Handle embedded content (images, code blocks, quotes)

### Navigation Features
- Back button to `/blog` using Next.js router
- Optional: Next/Previous article navigation

## 5. Error Handling, Loading States & SEO

### Loading States
- Skeleton loaders while fetching RSS feed
- Loading indicator on blog listing page
- Loading state on detail page

### Error Handling
- **RSS feed failure:** "Unable to load articles. Please try again later."
- **Article not found (404):** "Article not found" with link to blog listing
- **Network errors:** Retry option

### SEO Optimization

#### Blog Listing Page Metadata
```typescript
{
  title: "Blog - Faiz Rhm | Flutter Developer",
  description: "Articles and tutorials on Flutter development, UI/UX design, and mobile app best practices",
  openGraph: {
    title: "Blog - Faiz Rhm",
    description: "...",
    images: [...]
  }
}
```

#### Blog Detail Page Dynamic Metadata
```typescript
{
  title: `${article.title} - Faiz Rhm`,
  description: article.description,
  openGraph: {
    title: article.title,
    description: article.description,
    images: [article.thumbnail],
    publishedTime: article.pubDate
  }
}
```

### Performance Considerations
- Cache fetched articles in component state
- Avoid repeated API calls during session
- Lazy load images in article content
- Future: Consider ISR (Incremental Static Regeneration)

### Accessibility
- Proper heading hierarchy (h1, h2, h3)
- Alt text for images
- Keyboard navigation support
- ARIA labels where appropriate

## Technical Dependencies

### New Packages Required
- `rss-parser` or `fast-xml-parser` - RSS feed parsing
- `dompurify` - HTML sanitization
- `isomorphic-dompurify` - For Next.js compatibility

### Existing Dependencies Used
- Next.js App Router
- Mantine UI components
- TypeScript
- Tailwind CSS

## Files to Create/Modify

### New Files
- `src/app/blog/page.tsx` - Blog listing page
- `src/app/blog/[slug]/page.tsx` - Blog detail page
- `src/components/others/BlogCard.tsx` - Blog card component
- `src/lib/mediumRss.ts` - RSS fetching and parsing utilities
- `src/types/blog.ts` - TypeScript interfaces for blog data

### Modified Files
- `src/components/header/HeaderMenu.tsx` - Add "BLOG" navigation link

## Implementation Notes

1. Follow existing patterns from Projects and Market pages
2. Maintain visual consistency with current design system
3. Ensure all content stays within the website (no external redirects)
4. Test with various Medium article formats (images, code, embeds)
5. Handle edge cases (no articles, network failures, malformed RSS)

## Future Enhancements (Optional)
- Search/filter articles by tags
- Sort by date or popularity
- Newsletter signup integration
- Comment system
- Share buttons for social media
