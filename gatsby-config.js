module.exports = {
  siteMetadata: {
    title: `Grey Fox Studio blog`,
    description: `All things considered.`,
    author: `Mattia Vorstenbosch`,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `browser`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Playfair Display',
            variants: ['400', '700'],
          },
          {
            family: 'Raleway',
            variants: ['200', '400', '600', '700'],
          },
        ],
      },
    },
  ],
}
