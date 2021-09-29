/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query postDetails {
      allContentfulPost {
        edges {
          node {
            title
            slug
            description {
              description
            }
            updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
            eyeCatch {
              file {
                url
              }
              title
            }
            body {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const { edges } = result.data.allContentfulPost;

  edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node.slug}/`,
      component: path.resolve("./src/templates/post.js"),
      context: { post: edge.node },
    });
  });
};
