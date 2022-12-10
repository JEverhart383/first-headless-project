import React from "react";
import PostCard from "../components/PostCard";
import { data } from "../dummy-data/posts";

export default function PostsList() {
  const loading = false;
  const error = null;

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error :(</p>;

  const postsFound = Boolean(data?.posts.nodes.length);
  if (!postsFound) {
    return <p>No matching posts found.</p>;
  }

  return (
    <div className="posts-list">
      {data.posts.nodes.map((post) => (
        <PostCard key={post.databaseId} post={post} />
      ))}
    </div>
  );
}
