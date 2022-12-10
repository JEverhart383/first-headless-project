import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache
} from "@apollo/client";

const link = ApolloLink.from([
  new HttpLink({
    uri: `https://acf-demo.stellate.sh/graphql`,
    useGETForQueries: true
  })
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default client;

// import { ApolloClient, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//   uri: "https://acf-demo.stellate.sh/graphql",
//   cache: new InMemoryCache()
// });

// export default client;
