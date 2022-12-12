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