module.exports = {
  siteMetadata: {
    title: `Noel Beauty`,
    description: `A beauty site and portfolio for Joanne Noel`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`, 
    `gatsby-plugin-styled-components`,
    {
      // plugin that transforms the docs (.md) files into html contents added and configured
       resolve:`gatsby-transformer-remark`,
       options:{
            commonmark: true,
            footnotes: true,
            pedantic: true,
            gfm: true,
       }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    }, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    }, 
    {
      resolve: `gatsby-source-wordpress`, 
      options: {
        baseUrl: `localhost:8888/wordpress`, 
        protocol: `http`, 
        hostingWPCOM: `false`, 
        useACF: `true`, 
        verboseOutput: `true`
      }
    }, 
    {
      resolve: `gatsby-source-graphql`, 
      options: {
        typeName: `WPGraphQL`, 
        fieldName: `wpgraphql`, 
        url: `http://localhost:8888/wordpress/graphql`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
