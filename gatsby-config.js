module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.zidanewright.me',
    title: 'Zidane Wright',
  },
  plugins: [
    `gatsby-plugin-graphql-codegen`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
  ],
};
