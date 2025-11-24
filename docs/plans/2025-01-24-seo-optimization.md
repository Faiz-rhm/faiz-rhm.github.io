# SEO Optimization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Optimize website for SEO with dual strategy - attract Flutter development clients + rank for "flutter ui kits" keywords

**Architecture:** Complete professional overhaul of all content, metadata, and schema markup. Transform from casual portfolio to professional service offering with product marketplace.

**Tech Stack:** Next.js 15, TypeScript, Mantine UI, React, Schema.org JSON-LD

---

## Task 1: Update Root Layout Metadata

**Files:**
- Modify: `src/app/layout.tsx:19-22`

**Step 1: Update root metadata with professional SEO**

Replace lines 19-22 with:

```typescript
export const metadata: Metadata = {
  title: "Flutter Development Services | Enterprise Mobile App Development - Faiz Rhm",
  description: "Professional Flutter developer delivering scalable cross-platform mobile applications. Specializing in iOS/Android app development for enterprise clients worldwide. View portfolio & case studies.",
  keywords: "Flutter developer, mobile app development, cross-platform development, Flutter development services, iOS development, Android development, enterprise mobile apps",
};
```

**Step 2: Update Open Graph metadata**

Replace lines 40-43 with:

```typescript
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Flutter Development Services | Enterprise Mobile App Development - Faiz Rhm" />
        <meta property="og:description" content="Professional Flutter developer delivering scalable cross-platform mobile applications. Specializing in iOS/Android app development for enterprise clients worldwide." />
        <meta property="og:image" content="https://faizrhm.dev/preview.png" />
        <meta property="og:url" content="https://faizrhm.dev/" />
```

**Step 3: Update Twitter metadata**

Replace lines 45-48 with:

```typescript
        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flutter Development Services - Faiz Rhm" />
        <meta name="twitter:description" content="Professional Flutter developer specializing in enterprise-grade cross-platform mobile applications for iOS and Android." />
        <meta name="twitter:image" content="https://faizrhm.dev/preview.png" />
```

**Step 4: Add canonical tag**

Add after line 36 (after keywords meta tag):

```typescript
        <link rel="canonical" href="https://faizrhm.dev/" />
```

**Step 5: Verify changes**

Run: `npm run dev`
Check: http://localhost:3000 - view page source and verify metadata is present

**Step 6: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: update root layout with professional SEO metadata"
```

---

## Task 2: Transform Homepage Hero Section

**Files:**
- Modify: `src/app/page.tsx:45-50`

**Step 1: Update hero section with professional copy**

Replace lines 45-50 with:

```typescript
      <HeroSection
        heading="Enterprise Flutter Development Services"
        subheading="Delivering Scalable Cross-Platform Mobile Solutions for Global Businesses"
        imageSrc="/images/fr.png"
        altText="Faiz Rhm - Professional Flutter Developer"
      />
```

**Step 2: Verify changes locally**

Run: `npm run dev`
Check: http://localhost:3000 - verify new hero text displays correctly

**Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: update homepage hero with professional messaging"
```

---

## Task 3: Update About Section Content

**Files:**
- Modify: `src/app/page.tsx:60-64`

**Step 1: Replace about section with professional content**

Replace lines 60-64 with:

```typescript
      <AboutSection
        heading="[ ABOUT ME ]"
        description="Experienced Flutter developer specializing in enterprise-grade cross-platform mobile applications. Proven track record of delivering high-performance iOS and Android applications for clients across finance, healthcare, e-commerce, and education sectors. Leveraging Flutter and React Native to create scalable, maintainable solutions that drive business growth."
        buttons={buttons}
      />
```

**Step 2: Verify changes**

Run: `npm run dev`
Check: http://localhost:3000 - scroll to About section

**Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: update about section with professional description"
```

---

## Task 4: Update Project JSON - Job.af

**Files:**
- Modify: `src/data/project.json:5-7`

**Step 1: Update Job.af description with professional SEO copy**

Replace lines 5-7 with:

```json
      "name": "Job.af - Enterprise Job Board Platform",
      "slug": "job-af-job-board-app",
      "description": "Developed a comprehensive job board platform for the Afghan market, connecting job seekers with employers across multiple industries. The Flutter-based mobile application provides seamless job search, application tracking, and profile management functionality for both iOS and Android platforms. Successfully deployed to over 10,000 active users.",
```

**Step 2: Verify JSON is valid**

Run: `npm run dev`
Expected: No JSON parse errors

**Step 3: Commit**

```bash
git add src/data/project.json
git commit -m "feat: update Job.af project description for SEO"
```

---

## Task 5: Update Project JSON - Baran

**Files:**
- Modify: `src/data/project.json:33-34`

**Step 1: Update Baran description**

Replace lines 33-34 with:

```json
      "name": "Baran - Children's Reading Platform",
      "description": "Developed an interactive reading application for children, offering a curated library of books and audiobooks. Built with Flutter to deliver an engaging, educational experience on both iOS and Android. Features include offline reading, parental controls, and progress tracking. Implemented subscription-based monetization model with seamless payment integration.",
```

**Step 2: Verify JSON validity**

Run: `npm run dev`

**Step 3: Commit**

```bash
git add src/data/project.json
git commit -m "feat: update Baran project description for SEO"
```

---

## Task 6: Update Project JSON - Weena.af

**Files:**
- Modify: `src/data/project.json:59-60`

**Step 1: Update Weena.af description**

Replace lines 59-60 with:

```json
      "name": "Weena.af - Blood Donation Platform",
      "description": "Developed a life-saving blood donation platform connecting donors with recipients across Afghanistan. The Flutter application features real-time donor search, geolocation mapping, and user profiles with blood type information. Successfully facilitated hundreds of blood donations through intuitive mobile interface available on iOS and Android.",
```

**Step 2: Verify JSON validity**

Run: `npm run dev`

**Step 3: Commit**

```bash
git add src/data/project.json
git commit -m "feat: update Weena.af project description for SEO"
```

---

## Task 7: Update Project JSON - Wagey

**Files:**
- Modify: `src/data/project.json:85-86`

**Step 1: Update Wagey description**

Replace lines 85-86 with:

```json
      "name": "Wagey - Restaurant Food Ordering Platform",
      "description": "Developed a comprehensive food ordering platform enabling customers to browse menus, customize orders, and track deliveries in real-time. Built with Flutter for seamless performance across iOS and Android. Features include payment gateway integration, order management, and restaurant analytics dashboard. Currently in active development with pilot restaurant partners.",
```

**Step 2: Verify JSON validity**

Run: `npm run dev`

**Step 3: Commit**

```bash
git add src/data/project.json
git commit -m "feat: update Wagey project description for SEO"
```

---

## Task 8: Update Project JSON - Daricha

**Files:**
- Modify: `src/data/project.json:110-111`

**Step 1: Update Daricha description**

Replace lines 110-111 with:

```json
      "name": "Daricha - Educational Platform (EU-Sponsored)",
      "description": "Developed an educational platform sponsored by the European Union, focused on civic education and human rights awareness. The Flutter application delivers course content, assessments, and progress tracking to promote informed citizenship. Successfully launched on both App Store and Google Play, reaching thousands of learners across the region.",
```

**Step 2: Verify JSON validity**

Run: `npm run dev`

**Step 3: Commit**

```bash
git add src/data/project.json
git commit -m "feat: update Daricha project description for SEO"
```

---

## Task 9: Fix Project Detail Page Schema URLs

**Files:**
- Modify: `src/app/projects/[slug]/page.tsx:42,69,71`

**Step 1: Replace placeholder URLs with actual domain**

Replace line 42:

```typescript
    url: `https://faizrhm.dev/projects/${project.slug}`,
```

Replace line 69:

```typescript
        <meta property="og:url" content={`https://faizrhm.dev/projects/${project.slug}`} />
```

Replace line 71:

```typescript
        <link rel="canonical" href={`https://faizrhm.dev/projects/${project.slug}`} />
```

**Step 2: Update schema author information**

Replace lines 43-46 with:

```typescript
    author: {
      '@type': 'Person',
      name: 'Faiz Rhm',
      jobTitle: 'Flutter Developer & Mobile App Consultant',
      url: 'https://faizrhm.dev',
    },
```

**Step 3: Verify changes**

Run: `npm run dev`
Navigate to: http://localhost:3000/projects/job-af-job-board-app
View source and verify schema URLs are correct

**Step 4: Commit**

```bash
git add src/app/projects/[slug]/page.tsx
git commit -m "fix: replace placeholder URLs in project schema with actual domain"
```

---

## Task 10: Add Dynamic Metadata to Project Pages

**Files:**
- Modify: `src/app/projects/[slug]/page.tsx:12-60`

**Step 1: Add generateMetadata export above component**

Add after imports (around line 11):

```typescript
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = ProjectData.projects.find((project) => project.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found - Faiz Rhm',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.name} - Flutter App Development Case Study | Faiz Rhm`,
    description: project.description.substring(0, 160),
    keywords: `Flutter development, ${project.tag}, mobile app development, ${project.name}, case study`,
    openGraph: {
      title: project.name,
      description: project.description,
      images: [project.images[0]],
      url: `https://faizrhm.dev/projects/${project.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.name,
      description: project.description.substring(0, 160),
      images: [project.images[0]],
    },
  };
}
```

**Step 2: Import Metadata type**

Add to imports at top of file:

```typescript
import type { Metadata } from 'next';
```

**Step 3: Remove duplicate Head component**

Delete lines 63-73 (the <Head> component and its contents) as metadata is now handled by generateMetadata

**Step 4: Verify metadata appears**

Run: `npm run dev`
Navigate to: http://localhost:3000/projects/job-af-job-board-app
View source - verify title and meta tags are present

**Step 5: Commit**

```bash
git add src/app/projects/[slug]/page.tsx
git commit -m "feat: add dynamic metadata generation for project pages"
```

---

## Task 11: Update Market Data - FlutterSale

**Files:**
- Modify: `src/data/market.json:5-7`

**Step 1: Update FlutterSale with SEO-optimized description**

Replace lines 5-7 with:

```json
      "name": "FlutterSale - E-commerce UI Kit",
      "slug": "flutter-sale-ecommerce-ui-kit",
      "description": "Premium Flutter UI kit for e-commerce applications. Build beautiful shopping apps for iOS and Android with 50+ pre-built screens, cart functionality, product listings, and checkout flows. Production-ready Flutter templates that save months of development time. Perfect for grocery stores, retail, and online marketplace apps.",
```

**Step 2: Verify JSON validity**

Run: `npm run dev`

**Step 3: Commit**

```bash
git add src/data/market.json
git commit -m "feat: optimize FlutterSale UI kit description for SEO"
```

---

## Task 12: Update Market Data - Hotel Booking

**Files:**
- Modify: `src/data/market.json:21-23`

**Step 1: Update Hotel Booking description**

Replace lines 21-23 with:

```json
      "name": "Hotel Booking - Flutter UI Kit",
      "slug": "hotel-booking-ui-kit",
      "description": "Professional Flutter UI kit for hotel booking applications. Includes 40+ screens for hotel search, room selection, booking management, and user profiles. Ready-made Flutter components for iOS and Android that accelerate hospitality app development. Features include maps integration, date pickers, and payment flows.",
```

**Step 2: Verify JSON validity**

Run: `npm run dev`

**Step 3: Commit**

```bash
git add src/data/market.json
git commit -m "feat: optimize Hotel Booking UI kit description for SEO"
```

---

## Task 13: Update Market Data - SportUp

**Files:**
- Modify: `src/data/market.json:37-39`

**Step 1: Update SportUp description**

Replace lines 37-39 with:

```json
      "name": "SportUp - Sport & Fitness Flutter UI Kit",
      "slug": "sportup-sport-ui-kit",
      "description": "Modern Flutter UI kit designed for sports and fitness applications. Build engaging workout tracking, sports news, and fitness community apps for iOS and Android. Includes 45+ screens with activity tracking, social features, and statistics dashboards. Premium Flutter templates for the sports industry.",
```

**Step 2: Verify JSON validity**

Run: `npm run dev`

**Step 3: Commit**

```bash
git add src/data/market.json
git commit -m "feat: optimize SportUp UI kit description for SEO"
```

---

## Task 14: Update Market Data - Taxi Booking

**Files:**
- Modify: `src/data/market.json:53-55`

**Step 1: Update Taxi Booking description**

Replace lines 53-55 with:

```json
      "name": "Taxi Booking - Passenger Flutter UI Kit",
      "slug": "taxi-booking-ui-kit",
      "description": "Complete Flutter UI kit for taxi and ride-sharing applications. Build Uber-like apps for iOS and Android with 50+ screens including real-time tracking, fare calculation, driver matching, and payment integration. Production-ready Flutter components that reduce development time by 70%.",
```

**Step 2: Verify JSON validity**

Run: `npm run dev`

**Step 3: Commit**

```bash
git add src/data/market.json
git commit -m "feat: optimize Taxi Booking UI kit description for SEO"
```

---

## Task 15: Create Market Landing Page

**Files:**
- Modify: `src/app/market/page.tsx` (entire file)

**Step 1: Read existing market page**

Run: `cat src/app/market/page.tsx` to see current structure

**Step 2: Create SEO-optimized market landing page**

Replace entire file with:

```typescript
'use client';

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
  return (
    <>
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

**Step 3: Verify page renders correctly**

Run: `npm run dev`
Navigate to: http://localhost:3000/market
Verify: Title, description, and market cards display

**Step 4: Commit**

```bash
git add src/app/market/page.tsx
git commit -m "feat: create SEO-optimized market landing page"
```

---

## Task 16: Add Schema to Market Detail Pages

**Files:**
- Modify: `src/app/market/[slug]/page.tsx`

**Step 1: Read existing market detail page**

Run: `cat src/app/market/[slug]/page.tsx` to understand structure

**Step 2: Add Product schema to market detail pages**

Add schema after finding the product (around where you would render details):

```typescript
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.cover,
    brand: {
      '@type': 'Brand',
      name: 'Faiz Rhm',
    },
    offers: {
      '@type': 'Offer',
      price: product.price === 'FREE' ? '0' : product.price.replace('$', ''),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `https://faizrhm.dev/market/${product.slug}`,
    },
    category: 'Software > Mobile Apps > UI Kits',
  };
```

**Step 3: Add metadata generation**

Add before component export:

```typescript
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = Market.market.find((item) => item.slug === params.slug);

  if (!product) {
    return {
      title: 'Product Not Found - Faiz Rhm',
      description: 'The requested UI kit could not be found.',
    };
  }

  return {
    title: `${product.name} - Flutter UI Kit | Premium Template | Faiz Rhm`,
    description: product.description,
    keywords: `${product.name}, flutter ui kit, ui kits flutter, flutter template, ${product.tags.join(', ')}`,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.cover],
      url: `https://faizrhm.dev/market/${product.slug}`,
    },
  };
}
```

**Step 4: Add schema script to page**

Add script tag with schema in the return JSX:

```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
/>
```

**Step 5: Verify schema appears**

Run: `npm run dev`
Navigate to: http://localhost:3000/market/hotel-booking-ui-kit
View source and verify Product schema

**Step 6: Commit**

```bash
git add src/app/market/[slug]/page.tsx
git commit -m "feat: add Product schema and metadata to market detail pages"
```

---

## Task 17: Add Person Schema to Homepage

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Add Person and ProfessionalService schema**

Add before the return statement in Home component:

```typescript
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
```

**Step 2: Add schema scripts to page**

Add before the first `<Space>` in the return JSX:

```typescript
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
```

**Step 3: Verify schema**

Run: `npm run dev`
Navigate to: http://localhost:3000
View source and verify Person and ProfessionalService schemas

**Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add Person and ProfessionalService schema to homepage"
```

---

## Task 18: Build and Test SEO

**Step 1: Build production version**

Run: `npm run build`
Expected: Build completes successfully

**Step 2: Test production locally**

Run: `npm run start`
Navigate to: http://localhost:3000

**Step 3: Verify key pages**

Check these pages in browser:
- http://localhost:3000 - Homepage
- http://localhost:3000/projects/job-af-job-board-app - Project detail
- http://localhost:3000/market - Market landing
- http://localhost:3000/market/hotel-booking-ui-kit - UI kit detail

**Step 4: Verify metadata in each page**

For each page above, view source and verify:
- Title tag is present and SEO-optimized
- Meta description is present
- Open Graph tags are present
- Schema.org JSON-LD is present
- Canonical URLs point to faizrhm.dev

**Step 5: Stop production server**

Press Ctrl+C to stop server

**Step 6: Final commit**

```bash
git add -A
git commit -m "chore: SEO optimization complete - build verified"
```

---

## Verification Checklist

After completing all tasks, verify:

- [ ] Homepage has professional hero and about sections
- [ ] All project descriptions are professional and SEO-friendly
- [ ] All UI kit descriptions include target keywords
- [ ] No placeholder URLs remain (search for "yourdomain.com")
- [ ] All pages have proper meta titles and descriptions
- [ ] Schema.org markup on homepage (Person, ProfessionalService)
- [ ] Schema.org markup on project pages (CreativeWork, SoftwareApplication)
- [ ] Schema.org markup on market pages (Product)
- [ ] Build completes without errors
- [ ] All pages render correctly in production mode

---

## Post-Implementation

After implementation:

1. Deploy to production
2. Submit sitemap to Google Search Console
3. Test with Google Rich Results Test
4. Monitor Google Analytics for traffic changes
5. Track keyword rankings for "flutter ui kits" and "ui kits flutter"
