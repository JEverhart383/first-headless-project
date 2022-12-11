# Your First Headless WordPress Project

This starter project is a basic React SPA using React Router that consumes data from your WordPress WPGraphQL API. This repo is a teaching tool for the WP Engine Developer Relations team, or anyone interested in teaching or learning more about headless WordPress patterns.  

This project assumes that you have the following requirements met:
- A WordPress site (Check out [Local](https://localwp.com/) to create a local WP site)
- [WPGraphQL](https://www.wpgraphql.com/) Plugin
- [Advanced Custom Fields](https://www.advancedcustomfields.com/) and [WPGraphQL for ACF](https://www.wpgraphql.com/acf)(optional)
- [WPGraphQL Smart Cache (beta)](https://github.com/wp-graphql/wp-graphql-smart-cache) (optional)

The `main` branch of this project is considered the complete version, but since this is a teaching tool, you can look at the different branches of this repository to see how we incorporate data from WordPress step-by-step across the application.

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
    uri: `https://democontenthub.wpengine.com/graphql`,
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

## Step 2: Query for Data on Home Page

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



## Credits

- Thanks to Kellen Mace and Grace Erixon for creating the initial version of this app
- Thanks to [Tania Rascia](https://www.taniarascia.com) for the [starting point using React Router](https://www.taniarascia.com/using-react-router-spa).
