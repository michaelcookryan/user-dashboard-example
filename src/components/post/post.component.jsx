import React from "react";

const Post = ({ post }) => (
  <div className="post-container">
    <h5>{post.title}</h5>
    <p> {post.body} </p>
  </div>
);
export default Post;
