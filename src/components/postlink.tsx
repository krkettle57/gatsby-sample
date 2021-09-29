import { Link } from "gatsby";
import React from "react";

type PostLinkProps = {
  post: {
    title?: string;
    description?: string;
    updatedAt?: string;
    url: string;
  };
};

const PostLink: React.VFC<PostLinkProps> = ({ post }) => (
  <div className="mx-12 my-0 p-4">
    <div className="flex flex-col justify-center my-2">
      <span className="text-gray-500">最終更新日: {post.updatedAt}</span>
      <Link className="my-1" to={post.url}>
        <span className="text-2xl text-bold">{post.title}</span>
      </Link>
      <span>{post.description}</span>
    </div>
    <div className="flex justify-end">
      <Link className="m-2" to={post.url}>
        <span className="p-3 text-white bg-primary rounded-md">記事を読む</span>
      </Link>
    </div>
  </div>
);
export default PostLink;
