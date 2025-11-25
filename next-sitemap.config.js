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

        return [...projectPaths, ...marketPaths];
    },
};
