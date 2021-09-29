import React from "react";
import Layout from "../components/layout";
import PostHeader from "../components/postheader";

export default function Post({ pageContext }) {
  const { title, description, updatedAt } = pageContext.post;
  const body = pageContext.post.body.childMarkdownRemark.html;
  return (
    <Layout>
      <PostHeader
        title={title}
        description={description.description}
        updatedAt={updatedAt}
      />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </Layout>
  );
}
