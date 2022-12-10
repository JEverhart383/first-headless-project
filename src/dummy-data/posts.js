export const data = {
  posts: {
    __typename: "RootQueryToPostConnection",
    nodes: [
      {
        __typename: "Post",
        databaseId: 1031,
        title: "Tiled Gallery",
        date: "2013-03-15T17:23:27",
        slug: "tiled-gallery",
        link: "https://demo.wpgraphql.com/2013/03/15/tiled-gallery/",
        author: {
          __typename: "NodeWithAuthorToUserConnectionEdge",
          node: {
            __typename: "User",
            name: "Jared Erickson"
          }
        },
        featuredImage: null
      },
      {
        __typename: "Post",
        databaseId: 1027,
        title: "Twitter Embeds",
        date: "2013-03-15T15:47:16",
        slug: "twitter-embeds",
        link: "https://demo.wpgraphql.com/2013/03/15/twitter-embeds/",
        author: {
          __typename: "NodeWithAuthorToUserConnectionEdge",
          node: {
            __typename: "User",
            name: "Jason Bradley"
          }
        },
        featuredImage: null
      },
      {
        __typename: "Post",
        databaseId: 1016,
        title: "Featured Image (Vertical)…yo",
        date: "2013-03-15T15:36:32",
        slug: "featured-image-vertical",
        link: "https://demo.wpgraphql.com/2013/03/15/featured-image-vertical/",
        author: {
          __typename: "NodeWithAuthorToUserConnectionEdge",
          node: {
            __typename: "User",
            name: "John Saddington"
          }
        },
        featuredImage: {
          __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge",
          node: {
            __typename: "MediaItem",
            sourceUrl:
              "https://demo.wpgraphql.com/wp-content/uploads/2013/03/featured-image-vertical.jpg",
            altText: "Vertical Featured Image"
          }
        }
      },
      {
        __typename: "Post",
        databaseId: 1011,
        title: "Featured Image (Horizontal)…yo",
        date: "2013-03-15T15:15:12",
        slug: "featured-image-horizontal",
        link:
          "https://demo.wpgraphql.com/2013/03/15/featured-image-horizontal/",
        author: {
          __typename: "NodeWithAuthorToUserConnectionEdge",
          node: {
            __typename: "User",
            name: "Tom McFarlin"
          }
        },
        featuredImage: {
          __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge",
          node: {
            __typename: "MediaItem",
            sourceUrl:
              "https://demo.wpgraphql.com/wp-content/uploads/2013/03/featured-image-horizontal.jpg",
            altText: "Horizontal Featured Image"
          }
        }
      },
      {
        __typename: "Post",
        databaseId: 1000,
        title: "Nested And Mixed Lists",
        date: "2013-03-15T14:48:32",
        slug: "nested-and-mixed-lists",
        link: "https://demo.wpgraphql.com/2013/03/15/nested-and-mixed-lists/",
        author: {
          __typename: "NodeWithAuthorToUserConnectionEdge",
          node: {
            __typename: "User",
            name: "Michael Novotny"
          }
        },
        featuredImage: null
      },
      {
        __typename: "Post",
        databaseId: 996,
        title: "More Tag",
        date: "2013-03-15T14:41:11",
        slug: "more-tag",
        link: "https://demo.wpgraphql.com/2013/03/15/more-tag/",
        author: {
          __typename: "NodeWithAuthorToUserConnectionEdge",
          node: {
            __typename: "User",
            name: "Chris Ames"
          }
        },
        featuredImage: null
      },
      {
        __typename: "Post",
        databaseId: 993,
        title: "Excerpt",
        date: "2013-03-15T14:38:08",
        slug: "excerpt",
        link: "https://demo.wpgraphql.com/2013/03/15/excerpt/",
        author: {
          __typename: "NodeWithAuthorToUserConnectionEdge",
          node: {
            __typename: "User",
            name: "Jared Erickson"
          }
        },
        featuredImage: null
      },
      {
        __typename: "Post",
        databaseId: 919,
        title: "Markup And Formatting",
        date: "2013-01-11T20:22:19",
        slug: "markup-and-formatting",
        link: "https://demo.wpgraphql.com/2013/01/11/markup-and-formatting/",
        author: {
          __typename: "NodeWithAuthorToUserConnectionEdge",
          node: {
            __typename: "User",
            name: "Tom McFarlin"
          }
        },
        featuredImage: null
      },
      {
        __typename: "Post",
        databaseId: 903,
        title: "Image Alignment",
        date: "2013-01-10T20:15:40",
        slug: "image-alignment",
        link: "https://demo.wpgraphql.com/2013/01/10/image-alignment/",
        author: {
          __typename: "NodeWithAuthorToUserConnectionEdge",
          node: {
            __typename: "User",
            name: "Jared Erickson"
          }
        },
        featuredImage: null
      },
      {
        __typename: "Post",
        databaseId: 895,
        title: "Text Alignment",
        date: "2013-01-09T09:00:39",
        slug: "text-alignment",
        link: "https://demo.wpgraphql.com/2013/01/09/text-alignment/",
        author: {
          __typename: "NodeWithAuthorToUserConnectionEdge",
          node: {
            __typename: "User",
            name: "Chris Ames"
          }
        },
        featuredImage: null
      }
    ]
  }
};
