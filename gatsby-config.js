module.exports = {
  siteMetadata: {
    title: 'Scout Badges UK',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
      `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'UK Scout Badges App',
        short_name: 'ScoutBadges',
        start_url: '/',
        background_color: '#7413dc',
        theme_color: '#7413dc',
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
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
  ],
}
