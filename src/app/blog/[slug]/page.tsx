'use client'

import { Footer } from '@/components/footer/Footer';
import CustomDivider from '@/components/others/CustomDivider';
import { Text, Container, Space, Button, Badge, Group, Loader, Center, Box } from '@mantine/core';
import { useEffect, useState, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { MediumArticle } from '@/types/blog';
import { fetchMediumArticles, getCachedArticles, setCachedArticles, getArticleBySlug, calculateReadingTime } from '@/lib/mediumRss';
import DOMPurify from 'isomorphic-dompurify';

export default function BlogDetail() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;

  const [article, setArticle] = useState<MediumArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadArticle = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Try cached articles first
      let articles = getCachedArticles();

      // If no cache, fetch fresh
      if (!articles) {
        articles = await fetchMediumArticles();
        setCachedArticles(articles);
      }

      // Find the article by slug
      const foundArticle = getArticleBySlug(articles, slug);

      if (!foundArticle) {
        setError('Article not found');
      } else {
        setArticle(foundArticle);
      }
    } catch (err) {
      setError('Unable to load article. Please try again later.');
      console.error('Error loading article:', err);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    loadArticle();
  }, [loadArticle]);

  if (loading) {
    return (
      <>
        <Space h={100} />
        <Center style={{ minHeight: "400px" }}>
          <Loader size="lg" color="white" />
        </Center>
        <Footer />
      </>
    );
  }

  if (error || !article) {
    return (
      <>
        <Space h={100} />
        <Container size="md">
          <Center style={{ minHeight: "400px", flexDirection: "column", gap: "20px" }}>
            <Text
              style={{
                fontSize: "24px",
                fontFamily: "Manrope",
                color: "#B0B0B0",
                textAlign: "center",
              }}
            >
              {error || 'Article not found'}
            </Text>
            <Button
              variant="default"
              onClick={() => router.push('/blog')}
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
              ← BACK TO BLOG
            </Button>
          </Center>
        </Container>
        <Footer />
      </>
    );
  }

  // Format the date
  const formattedDate = new Date(article.pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const readingTime = calculateReadingTime(article.content);

  // Sanitize HTML content
  const sanitizedContent = DOMPurify.sanitize(article.content, {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling']
  });

  return (
    <>
      <Space h={100} />

      <Container size="md">
        {/* Back Button */}
        <Button
          variant="subtle"
          onClick={() => router.push('/blog')}
          style={{
            color: "#B0B0B0",
            fontFamily: "Manrope",
            fontSize: "14px",
            fontWeight: "500",
            padding: "0",
            marginBottom: "30px",
          }}
        >
          ← Back to Blog
        </Button>

        {/* Article Header */}
        <Box mb={20}>
          <Group gap="xs" mb={20}>
            {article.categories.slice(0, 3).map((category, index) => (
              <Badge
                key={index}
                variant="light"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#FFFFFF",
                  fontFamily: "Manrope",
                  fontSize: "12px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  padding: "8px 12px",
                  borderRadius: "8px",
                }}
              >
                {category}
              </Badge>
            ))}
          </Group>

          <Text
            style={{
              fontSize: '42px',
              fontWeight: '600',
              fontFamily: 'Manrope',
              color: '#FFFFFF',
              lineHeight: '1.2',
              marginBottom: '20px',
            }}
          >
            {article.title}
          </Text>

          <Text
            style={{
              fontSize: "16px",
              fontWeight: "400",
              fontFamily: "Manrope",
              color: "#8F8F8F",
            }}
          >
            {formattedDate} • {readingTime}
          </Text>
        </Box>

        <Space h={40} />

        {/* Article Content */}
        <Box
          style={{
            color: '#E0E0E0',
            fontFamily: 'Manrope',
            fontSize: '18px',
            lineHeight: '1.8',
          }}
          className="blog-content"
        >
          <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
        </Box>

        <Space h={60} />

        {/* Back to Blog Button */}
        <Center>
          <Button
            variant="default"
            onClick={() => router.push('/blog')}
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
            ← BACK TO BLOG
          </Button>
        </Center>
      </Container>

      <Space h={100} />
      <CustomDivider />
      <Footer />
      <Space h={50} />

      <style jsx global>{`
        .blog-content h1,
        .blog-content h2,
        .blog-content h3,
        .blog-content h4 {
          color: #FFFFFF;
          font-family: 'Manrope', sans-serif;
          margin-top: 30px;
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .blog-content h1 {
          font-size: 36px;
          font-weight: 700;
        }

        .blog-content h2 {
          font-size: 30px;
          font-weight: 600;
        }

        .blog-content h3 {
          font-size: 24px;
          font-weight: 600;
        }

        .blog-content h4 {
          font-size: 20px;
          font-weight: 600;
        }

        .blog-content p {
          margin-bottom: 20px;
          color: #E0E0E0;
        }

        .blog-content a {
          color: #4A9EFF;
          text-decoration: underline;
        }

        .blog-content a:hover {
          color: #6BB1FF;
        }

        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 30px 0;
        }

        .blog-content pre {
          background: rgba(35, 35, 35, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 20px;
          overflow-x: auto;
          margin: 20px 0;
        }

        .blog-content code {
          background: rgba(35, 35, 35, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          padding: 2px 6px;
          font-family: 'Courier New', monospace;
          font-size: 16px;
          color: #E0E0E0;
        }

        .blog-content pre code {
          background: none;
          border: none;
          padding: 0;
        }

        .blog-content ul,
        .blog-content ol {
          padding-left: 30px;
          margin-bottom: 20px;
          color: #E0E0E0;
        }

        .blog-content li {
          margin-bottom: 10px;
        }

        .blog-content blockquote {
          border-left: 4px solid rgba(255, 255, 255, 0.3);
          padding-left: 20px;
          margin: 20px 0;
          color: #B0B0B0;
          font-style: italic;
        }

        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }

        .blog-content th,
        .blog-content td {
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 10px;
          text-align: left;
        }

        .blog-content th {
          background: rgba(35, 35, 35, 0.8);
          color: #FFFFFF;
          font-weight: 600;
        }

        .blog-content iframe {
          max-width: 100%;
          margin: 20px 0;
        }
      `}</style>
    </>
  );
}
