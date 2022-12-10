import React from "react";
import PostsList from "../components/PostsList";

export default function HomePage() {
  return (
    <div className="page-container">
      <h1>Blog</h1>
      <PostsList />
    </div>
  );
}
