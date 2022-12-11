import React from "react";
import { Link } from "react-router-dom";

const formatDate = (date) => new Date(date).toLocaleDateString();

export default function PostPageContent({ post }) {
  const { date, title, content, author, categories, postResources } = post;
  const haveCategories = Boolean(categories?.nodes?.length);
  const haveResourcePosts = Boolean(postResources?.blogPosts?.length)
  const haveResourceVideos = Boolean(postResources?.videos?.length)

  return (
    <article>
      <h1>{title}</h1>
      <p className="post-meta">
        <span role="img" aria-label="writing hand">
          ✍️
        </span>{" "}
        {author.node.name} on {formatDate(date)}
      </p>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      { (haveResourcePosts || haveResourceVideos) ? (
        <div className="categories-list">
          <h2>Post Resources</h2>
          <ul>
            { haveResourcePosts ? (postResources.blogPosts.map((post)=>{
              return ( 
               <li>📄 <a href={post.url} key={post.title}>{post.title}</a></li>
               )
            })) : null }

            { haveResourceVideos ? (postResources.videos.map((video)=>{
              return ( 
               <li>🎥 <a href={video.url} key={video.title}>{video.title}</a></li>
               )
            })) : null }
          </ul>
        </div>
      ) : null}
      {haveCategories ? (
        <div className="categories-list">
          <h2>Categorized As</h2>
          <ul>
            {categories.nodes.map((category) => {
              const { slug, name } = category;
              return (
                <Link to={`/category/${slug}`} key={slug}>
                  <li key={slug}>{name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
