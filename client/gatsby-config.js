/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL ||`http://localhost:1337`,
        contentTypes: [
          'article',
          'category'
        ],
        queryLimit: 1000
      }
    }
  ],
}
