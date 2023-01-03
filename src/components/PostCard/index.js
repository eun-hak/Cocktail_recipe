import React from "react";
import { Card } from "antd";

const PostCard = ({ post }) => {
  return (
    <>
      <Card.Meta title={post.User.nickname} description={post.content} />
    </>
  );
};

export default PostCard;
