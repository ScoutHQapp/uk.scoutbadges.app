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
      {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
              trackingId: "UA-126973909-1",
              // Puts tracking script in the head instead of the body
              head: false,
              // Setting this parameter is optional
              anonymize: true,
              // Setting this parameter is also optional
              respectDNT: true,
              // Avoids sending pageview hits from custom paths
              //exclude: ["/preview/**", "/do-not-track/me/too/"],
              // Enables Google Optimize using your container Id
              //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
              // Any additional create only fields (optional)
              sampleRate: 5,
              siteSpeedSampleRate: 10,
              cookieDomain: "uk.scoutbadges.app",
          },
      }
  ],
}
