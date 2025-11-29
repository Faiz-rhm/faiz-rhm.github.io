'use client'

import { Footer } from "@/components/footer/Footer";
import { Box, Container, Text, Loader, Center, Button, SimpleGrid } from '@mantine/core';
import CustomDivider from "@/components/others/CustomDivider";
import HeroSection from "@/components/others/HeroSection";
import BlogCard from "@/components/others/BlogCard";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MediumArticle } from "@/types/blog";
import { fetchMediumArticles, getCachedArticles, setCachedArticles } from "@/lib/mediumRss";

export default function Blog() {
  const router = useRouter();
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    setLoading(true);
    setError(null);

    // Try to get cached articles first
    const cached = getCachedArticles();
    if (cached) {
      setArticles(cached);
      setLoading(false);
      return;
    }

    // Fetch fresh articles
    try {
      const fetchedArticles = await fetchMediumArticles();
      setArticles(fetchedArticles);
      setCachedArticles(fetchedArticles);
    } catch (err) {
      setError('Unable to load articles. Please try again later.');
      console.error('Error loading articles:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleNavigation = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  if (loading) {
    return (
      <>
        <Box pb={50} />
        <HeroSection
          heading="Insights on development, design, and building better digital products"
          subheading="✍️ Articles & Tutorials"
          altText="Faiz Rhm Blog"
        />
        <Box pb={70} />
        <Center style={{ minHeight: "400px" }}>
          <Loader size="lg" color="white" />
        </Center>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Box pb={50} />
        <HeroSection
          heading="Insights on development, design, and building better digital products"
          subheading="✍️ Articles & Tutorials"
          altText="Faiz Rhm Blog"
        />
        <Box pb={70} />
        <Center style={{ minHeight: "400px" }}>
          <Container size="sm">
            <Text
              style={{
                fontSize: "18px",
                fontFamily: "Manrope",
                color: "#B0B0B0",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              {error}
            </Text>
            <Center>
              <Button
                variant="default"
                onClick={loadArticles}
                style={{
                  background: "#FFFFFF",
                  height: "45px",
                  borderRadius: "12px",
                  color: "#000000",
                  fontFamily: "Manrope",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                RETRY
              </Button>
            </Center>
          </Container>
        </Center>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Box pb={50} />

      <HeroSection
        heading="Insights on development, design, and building better digital products"
        subheading="✍️ Articles & Tutorials"
        altText="Faiz Rhm Blog"
      />

      <Box pb={70} />

      {articles.length === 0 ? (
        <Center style={{ minHeight: "400px" }}>
          <Text
            style={{
              fontSize: "18px",
              fontFamily: "Manrope",
              color: "#B0B0B0",
              textAlign: "center",
            }}
          >
            No articles found.
          </Text>
        </Center>
      ) : (
        <Container size="xl">
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 2 }}
            spacing={{ base: 24, sm: 28, lg: 32 }}
          >
            {articles.map((article) => (
              <BlogCard
                key={article.slug}
                title={article.title}
                description={article.description}
                thumbnail={article.thumbnail}
                categories={article.categories}
                pubDate={article.pubDate}
                content={article.content}
                onClick={() => handleNavigation(article.slug)}
              />
            ))}
          </SimpleGrid>
        </Container>
      )}

      <Box pb={20} />

      <CustomDivider />

      <Footer />

      <Box pb={50} />
    </>
  );
}
