module.exports = {
    siteUrl: 'https://faizrhm.dev/',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.7,
    additionalPaths: async (config) => {
        const projectData = require('./src/data/project.json');
        const marketData = require('./src/data/market.json');

        // Generate paths for all project pages
        const projectPaths = projectData.projects.map(project => ({
            loc: `/projects/${project.slug}`,
            changefreq: 'weekly',
            priority: 0.8,
            lastmod: new Date().toISOString(),
        }));

        // Generate paths for all market item pages
        const marketPaths = marketData.market.map(item => ({
            loc: `/market/${item.slug}`,
            changefreq: 'weekly',
            priority: 0.8,
            lastmod: new Date().toISOString(),
        }));

        // Add blog listing page
        const blogMainPage = {
            loc: '/blog',
            changefreq: 'daily',
            priority: 0.9,
            lastmod: new Date().toISOString(),
        };

        // Fetch and generate paths for blog articles from Medium RSS
        let blogArticlePaths = [];
        try {
            const Parser = require('rss-parser');
            const parser = new Parser();
            const feed = await parser.parseURL('https://api.allorigins.win/raw?url=' + encodeURIComponent('https://medium.com/feed/@Faiz_Rhm'));

            blogArticlePaths = feed.items.map(item => {
                const slug = item.title
                    .toLowerCase()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/\s+/g, '-')
                    .replace(/-+/g, '-')
                    .trim();

                return {
                    loc: `/blog/${slug}`,
                    changefreq: 'monthly',
                    priority: 0.7,
                    lastmod: item.isoDate || new Date().toISOString(),
                };
            });
        } catch (error) {
            console.error('Error fetching Medium RSS for sitemap:', error);
        }

        return [...projectPaths, ...marketPaths, blogMainPage, ...blogArticlePaths];
    },
};
