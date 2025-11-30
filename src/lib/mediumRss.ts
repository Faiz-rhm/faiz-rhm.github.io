import Parser from 'rss-parser';
import { MediumArticle, ArticleCache } from '@/types/blog';

const CACHE_KEY = 'medium_articles_cache';
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

interface RSSFeedItem {
  title?: string;
  contentSnippet?: string;
  description?: string;
  link?: string;
  pubDate?: string;
  isoDate?: string;
  categories?: string[];
  content?: string;
  'content:encoded'?: string;
  thumbnail?: {
    $?: {
      url?: string;
    };
  };
}

const parser = new Parser({
  customFields: {
    item: [
      ['content:encoded', 'content'],
      ['media:thumbnail', 'thumbnail'],
    ],
  },
});

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function extractThumbnail(item: RSSFeedItem): string {
  // Try to get thumbnail from media:thumbnail
  if (item.thumbnail?.$ && item.thumbnail.$.url) {
    return item.thumbnail.$.url;
  }

  // Try to extract from content
  if (item.content) {
    const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
    if (imgMatch) {
      return imgMatch[1];
    }
  }

  // Fallback to a placeholder or default image
  return '/images/blog-placeholder.jpg';
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const textContent = content.replace(/<[^>]*>/g, '');
  const wordCount = textContent.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

export async function fetchMediumArticles(): Promise<MediumArticle[]> {
  try {
    // Use CORS proxy to fetch Medium RSS feed
    const rssUrl = 'https://medium.com/feed/@Faiz_Rhm';
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`;
    const feed = await parser.parseURL(proxyUrl);

    const articles: MediumArticle[] = feed.items.map((item: RSSFeedItem) => ({
      title: item.title || '',
      description: item.contentSnippet || item.description || '',
      link: item.link || '',
      pubDate: item.pubDate || item.isoDate || '',
      thumbnail: extractThumbnail(item),
      categories: item.categories || [],
      content: item.content || item['content:encoded'] || '',
      slug: generateSlug(item.title || ''),
    }));

    return articles;
  } catch (error) {
    console.error('Error fetching Medium RSS feed:', error);
    throw new Error('Failed to fetch articles from Medium');
  }
}

export function getCachedArticles(): MediumArticle[] | null {
  if (typeof window === 'undefined') return null;

  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const { articles, timestamp }: ArticleCache = JSON.parse(cached);
    const now = Date.now();

    // Check if cache is still valid (less than 1 hour old)
    if (now - timestamp < CACHE_DURATION) {
      return articles;
    }

    // Cache expired, remove it
    localStorage.removeItem(CACHE_KEY);
    return null;
  } catch (error) {
    console.error('Error reading cache:', error);
    localStorage.removeItem(CACHE_KEY);
    return null;
  }
}

export function setCachedArticles(articles: MediumArticle[]): void {
  if (typeof window === 'undefined') return;

  try {
    const cache: ArticleCache = {
      articles,
      timestamp: Date.now(),
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch (error) {
    console.error('Error setting cache:', error);
  }
}

export function getArticleBySlug(articles: MediumArticle[], slug: string): MediumArticle | undefined {
  return articles.find(article => article.slug === slug);
}

export { calculateReadingTime };
