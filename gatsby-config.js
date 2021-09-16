module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.zidanewright.me',
    title: 'Zidane Wright',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-plugin-graphql-codegen`,
    `gatsby-plugin-mdx`,
  ],
};
