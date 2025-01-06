/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Au-venturous Buddy`,
    domain: `/au-venturous-buddy-website`,
    author: `Au-venturous Buddy`
  },
  pathPrefix: "/au-venturous-buddy-website",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images-v2 must
          // go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images-v2`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Au-venturous Buddy`,
        short_name: `AUVB`,
        start_url: `/`,
        background_color: `#00F`,
        theme_color: `#00F`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/AUVB Logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
}
