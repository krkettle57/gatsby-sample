import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import PostLink from "../components/postlink";
import Seo from "../components/seo";

const IndexPage: React.VFC<PageProps<GatsbyTypes.postListQuery>> = ({
  data,
}) => {
  const posts = data.allContentfulPost.edges;

  return (
    <Layout>
      <Seo title="Home" />
      {posts.map(edge => {
        const post = {
          title: edge.node.title!,
          description: edge.node.description?.description,
          updatedAt: edge.node.updatedAt!,
          url: `/post/${edge.node.slug!}`,
        };
        return <PostLink key={edge.node.slug} post={post} />;
      })}
    </Layout>
  );
};
export const pageQuery = graphql`
  query postList {
    allContentfulPost {
      edges {
        node {
          title
          slug
          description {
            description
          }
          updatedAt(
            locale: "ja-JP"
            formatString: "YYYY年MM月DD日"
            fromNow: true
          )
        }
      }
    }
  }
`;

export default IndexPage;
