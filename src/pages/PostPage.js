import React from "react";
import { Link } from "react-router-dom";
import PostPageContent from "../components/PostPageContent";
import { data } from "../dummy-data/post";

export default function PostPage(props) {
  const loading = false;
  const error = null;
  const postFound = true;

  return (
    <div className="page-container">
      <Link to="/">← Home</Link>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : !postFound ? (
        <p>Post could not be found.</p>
      ) : (
        <PostPageContent post={data.post} />
      )}
    </div>
  );
}