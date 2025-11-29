export interface MediumArticle {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  categories: string[];
  content: string;
  slug: string;
}

export interface ArticleCache {
  articles: MediumArticle[];
  timestamp: number;
}
