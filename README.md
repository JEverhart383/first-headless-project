# Your First Headless WordPress Project with ACF and WPGraphQL

This starter project is a basic React SPA using React Router that consumes data from your WordPress WPGraphQL API. This repo is a teaching tool for the WP Engine Developer Relations team, or anyone interested in teaching or learning more about headless WordPress patterns.  

This project assumes that you have the following requirements met:
- A WordPress site (Check out [Local](https://localwp.com/) to create a local WP site)
- [WPGraphQL](https://www.wpgraphql.com/) Plugin
- [Advanced Custom Fields](https://www.advancedcustomfields.com/) and [WPGraphQL for ACF](https://www.wpgraphql.com/acf)(optional)
- [WPGraphQL Smart Cache (beta)](https://github.com/wp-graphql/wp-graphql-smart-cache) (optional)

The `main` branch of this project is considered the complete version, but since this is a teaching tool, you can look at the different branches of this repository to see how we incorporate data from WordPress step-by-step across the application.

This tutorial is heavily based on this [crash course on getting started with React and headless WP](https://developers.wpengine.com/blog/build-a-simple-headless-wordpress-app-with-react-wpgraphql).

To get started, do one of the following: 
- Open [the CodeSandbox for this workshop](https://codesandbox.io/s/first-headless-wordpress-project-acf-wpgraphql-xr5ebt). It's a good idea to create a fork of this project so you can come back to the starting point if needed.
- Fork this repository or clone locally using `git clone https://github.com/JEverhart383/first-headless-project.git`

For this workshop, you can use the following endpoints:
- REST API Base URL: https://acfheadless.wpengine.com/wp-json/wp/v2/posts
- WPGraphQL URL: https://acfheadless.wpengine.com/graphql
- WPGraphQL Backup URL: https://api.headlesswp.info/graphql

Please be a good community member and treat these resource nicely so that everyone can learn 🥳


## Step 0: Starting Point
You can access the starting point for this tutorial through the `waypoint/start` branch by running `git checkout waypoint/start` in your terminal. At this point, all of our application's data is being sourced from the `dummy-data` directory. 

## Step 1: Adding Apollo for Data Fetching

You can access this waypoint by running `git checkout waypoint/step-one` in your terminal.

During this step, we configure an Apollo client instance to pull data from our WordPress site by creating a file in `lib/apollo.js` with the following contents:

```
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache
} from "@apollo/client";

const link = ApolloLink.from([
  new HttpLink({
    uri: `https://acfheadless.wpengine.com/graphql`,
    useGETForQueries: true
  })
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default client;

```

With the client created, we then use the `ApolloProvider` component to make that data available throughout our component tree using hooks. Replace the contents of `App.js` with the following code:

```
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import "./styles.css";

import { ApolloProvider } from "@apollo/client/react";
import client from "./lib/apollo";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/blog/:slug" component={PostPage} />
      </Switch>
    </ApolloProvider>
  );
}

```

You can read more about the React Router [Switch](https://v5.reactrouter.com/web/api/Switch) and [Route](https://v5.reactrouter.com/web/api/Route) components to get a understanding of how to include additional routes.

## Step 2: Query for Data on Home Page

You can access this waypoint by running `git checkout waypoint/step-two` in your terminal.

The data displayed on in the `HomePage` component is actually sourced and rendered inside of the `components/PostList.js` component. In this file, you will need to update the imports to include `gql` and `useQuery` from the `@apollo/client` package. From there, we format our query using `gql` and fetch the data using `useQuery` before rendering our `posts` using `PostCard` components.

Update your `components/PostList.js` to the following code:

```
import React from "react";
import PostCard from "../components/PostCard";
import { gql, useQuery } from "@apollo/client";

const GET_ALL_POSTS = gql`
  query getAllPosts {
    posts {
      nodes {
        databaseId
        title
        date
        slug
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
`;

export default function PostsList() {
 const { loading, error, data } = useQuery(GET_ALL_POSTS);

 if (loading) return <p>Loading posts…</p>;
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

```

## Step 3: Query for Data on Post Details Page

You can access this waypoint by running `git checkout waypoint/step-three` in your terminal.

Now we should have a functioning home page, but if you click into any of the actual posts they all display the same data. To get this working, we need to use out `slug` route parameter to query our WordPress install.

```
import React from "react";
import { Link } from "react-router-dom";
import PostPageContent from "../components/PostPageContent";
import { gql, useQuery } from "@apollo/client";

const GET_POST_BY_SLUG = gql`
  query getPostBySlug($id: ID!) {
    post(id: $id, idType: SLUG) {
      title
      date
      content
      categories {
        nodes {
          slug
          name
        }
      }
      author {
        node {
          name
        }
      }
      postResources{
        blogPosts
        	{
            title
            url
          }
        videos {
          title
          url
        }
      }
    }
  }
`;

export default function PostPage(props) {
 const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
	variables: {
		id: props.match.params.slug
	}
});

 const postFound = Boolean(data?.post);

 return (
   <div className="page-container">
     <Link to="/">← Home</Link>
     {loading ? (
       <p>Loading…</p>
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

```



## Step 4: Show ACF Fields in Post Page Content

You can access this waypoint by running `git checkout waypoint/step-four` in your terminal.

Now that we have our basic post details page wired up, it's time to show our ACF data on those pages. We can create two variables called `haveResourcePosts` and `haveResourceVideos` to check whether or not we have ACF resources for a given post, and then we can render those items in a unified list. To complete this step, copy the code below into your `components/PostPageContent.js` file.

```
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

```
## Deploy

You can access this waypoint by running `git checkout deploy` in your terminal.

[Atlas](https://wpengine.com/atlas/) is WP Engine's headless WordPress hosting platform, where an app consists of a WordPress install and a Node.js hosting container, powered by modern JAMstack developer workflows. 

You can sign up for an [Atlas Sandbox Account](https://my.wpengine.com/signup?plan=headless-eval) to deploy your app. The sign up process asks for a credit card, but this does not get charged. It's only for fraud prevention purposes.

This branch is ready to be deployed. To serve our React SPA in a node container we installed the `express` package, and modified the `npm run start` command to run `node server.js`, which should start our express server. 

```

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080);

```

Ideally, you would swap out the URL here to the WPGraphQL endpoint you create. You can follow our [getting started guide on deploying from your own repository](https://developers.wpengine.com/docs/atlas/getting-started/deploy-from-existing-repo).

## Want to Learn More?
To get more content from the WP Engine developer relations team, you can [read tutorials on our website](https://developers.wpengine.com/) or [watch on our YouTube channel](https://www.youtube.com/channel/UCh1WuL54XFb9ZI6m6goFv1g). Our [Headless WordPress Developer Roadmap](https://developers.wpengine.com/roadmap) builds on the concepts you learned here today and fills in some background on a few key technologies like React and GraphQL.

If you're on Discord, join the 700+ developers in [the headless WordPress Discord community](https://developers.wpengine.com/discord). This is a great place to ask questions, and stay updated on community events like this one.

## Credits

- Thanks to Kellen Mace and Grace Erixon for creating the initial version of this app
- Thanks to [Tania Rascia](https://www.taniarascia.com) for the [starting point using React Router](https://www.taniarascia.com/using-react-router-spa).
