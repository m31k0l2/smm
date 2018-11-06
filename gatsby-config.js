module.exports = {
    siteMetadata: {
      title: `SSM-PUBLISHER`,
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography.js`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `data`,
          path: `${__dirname}/src/data/`,
        },
      },
      {
        resolve: `gatsby-source-mongodb`,
        options: { dbName: `cmm`, collection: `accounts` },
        auth: { user: `nikita`, password: `1367` }
      },
      `gatsby-transformer-json`,
      `gatsby-plugin-sass`,
    ],
  }