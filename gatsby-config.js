module.exports = {
    siteMetadata: {
        title: 'Scout Badges',
        siteUrl: 'https://uk.scoutbadges.app',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-catch-links`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'UK Scout Badges App',
                short_name: 'Scout Badges',
                start_url: '/',
                background_color: '#7413dc',
                theme_color: '#7413dc',
                display: 'standalone',
                icon: 'src/images/logo.png', // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-offline',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: "markdown-pages",
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                // your google analytics tracking id
                trackingId: `UA-126973909-1`,
                // enable ip anonymization
                anonymize: true,
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Nunito Sans`,
                        variants: [`300`, `400`, `700`]
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://uk.scoutbadges.app',
                sitemap: 'https://uk.scoutbadges.app/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }]
            }
        }
    ],
}
