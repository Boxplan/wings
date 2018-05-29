module.exports = {
  siteMetadata: {
    title: "Shibravyi Courtyard",
    author: "Banquetbox",
    description: "Shibravyi Courtyard"
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
      /*{
          resolve: `gatsby-plugin-nprogress`,
          options: {
              // Setting a color is optional.
              color: `tomato`,
              // Disable the loading spinner.
              showSpinner: true,
          },
      },*/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    /*{
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },*/
  //  `gatsby-transformer-sharp`,
  //  `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ],
}
