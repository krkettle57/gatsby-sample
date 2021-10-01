import React from "react";

type PostHeaderProps = {
  title: string;
  description: string;
  updatedAt: string;
};

const PostHeader: React.VFC<PostHeaderProps> = ({
  title,
  description,
  updatedAt,
}) => (
  <div>
    <span className="text-gray-600">更新日: {updatedAt}</span>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

export default PostHeader;
