export const data = {
  post: {
    __typename: "Post",
    date: "2013-03-15T17:23:27",
    title: "Tiled Gallery",
    content:
      '<p>This is a test for Jetpack&#8217;s Tiled Gallery.</p>\n<p>You can install <a title="Jetpack for WordPress" href="http://jetpack.me/" target="_blank">Jetpack</a> or <a title="Slim Jetpack" href="http://wordpress.org/extend/plugins/slimjetpack/" target="_blank">Slim Jetpack</a> to test it out.</p>\n<div id=\'gallery-1\' class=\'gallery galleryid-1031 gallery-columns-4 gallery-size-thumbnail\'><figure class=\'gallery-item\'>\n\t\t\t<div class=\'gallery-icon portrait\'>\n\t\t\t\t<a href=\'https://demo.wpgraphql.com/2013/03/15/tiled-gallery/fight-club/\'><img width="150" height="150" src="https://demo.wpgraphql.com/wp-content/uploads/2013/03/fight-club-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="Fight Club" loading="lazy" /></a>\n\t\t\t</div></figure><figure class=\'gallery-item\'>\n\t\t\t<div class=\'gallery-icon portrait\'>\n\t\t\t\t<a href=\'https://demo.wpgraphql.com/2013/03/15/tiled-gallery/ironman-2/\'><img width="150" height="150" src="https://demo.wpgraphql.com/wp-content/uploads/2013/03/ironman-2-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="Iron Man 2" loading="lazy" /></a>\n\t\t\t</div></figure><figure class=\'gallery-item\'>\n\t\t\t<div class=\'gallery-icon portrait\'>\n\t\t\t\t<a href=\'https://demo.wpgraphql.com/2013/03/15/tiled-gallery/man-of-steel/\'><img width="150" height="150" src="https://demo.wpgraphql.com/wp-content/uploads/2013/03/man-of-steel-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="Man Of Steel" loading="lazy" /></a>\n\t\t\t</div></figure><figure class=\'gallery-item\'>\n\t\t\t<div class=\'gallery-icon portrait\'>\n\t\t\t\t<a href=\'https://demo.wpgraphql.com/2013/03/15/tiled-gallery/spider-man/\'><img width="150" height="150" src="https://demo.wpgraphql.com/wp-content/uploads/2013/03/spider-man-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="The Amazing Spider Man" loading="lazy" /></a>\n\t\t\t</div></figure><figure class=\'gallery-item\'>\n\t\t\t<div class=\'gallery-icon portrait\'>\n\t\t\t\t<a href=\'https://demo.wpgraphql.com/2013/03/15/tiled-gallery/the-dark-knight-rises/\'><img width="150" height="150" src="https://demo.wpgraphql.com/wp-content/uploads/2013/03/the-dark-knight-rises-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="The Dark Knight Rises" loading="lazy" /></a>\n\t\t\t</div></figure><figure class=\'gallery-item\'>\n\t\t\t<div class=\'gallery-icon portrait\'>\n\t\t\t\t<a href=\'https://demo.wpgraphql.com/2013/03/15/tiled-gallery/captain-america/\'><img width="150" height="150" src="https://demo.wpgraphql.com/wp-content/uploads/2013/03/captain-america-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="Captain America" loading="lazy" /></a>\n\t\t\t</div></figure>\n\t\t</div>\n\n<p>This is some text after the Tiled Gallery just to make sure that everything spaces nicely.</p>\n',
    author: {
      __typename: "NodeWithAuthorToUserConnectionEdge",
      node: {
        __typename: "User",
        name: "Jared Erickson"
      }
    },
    categories: {
      __typename: "PostToCategoryConnection",
      nodes: [
        {
          __typename: "Category",
          slug: "post-format-gallery",
          name: "Gallery"
        },
        {
          __typename: "Category",
          slug: "images",
          name: "Images"
        },
        {
          __typename: "Category",
          slug: "jetpack",
          name: "Jetpack"
        }
      ]
    }
  }
};
