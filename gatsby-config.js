module.exports = {
  siteMetadata: {
    title: "猫好きエンジニアの備忘録",
    description:
      "猫好きなエンジニアがフロントエンド・サーバサイド問わず学んだ技術を書き留めておくテックブログです",
    author: "@krkettle",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typegen",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "krkettle-blog",
        short_name: "blog",
        start_url: "/",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
