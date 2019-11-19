const path = require(`path`);
const slash = require(`slash`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const PostTemplate = path.resolve(`./src/templates/PostTemplate.js`);
  // query content for WordPress posts
  const result = await graphql(`
    query {
      wpgraphql {
        posts {
          edges {
            node {
              id
              title
              content
              slug
            }
          }
        }
      }
    }
  `)

  
  result.data.wpgraphql.posts.edges.forEach(edge => {
    console.log(edge);
    createPage({
      // will be the url for the page
      path: `/blog/${edge.node.slug}`,
      // specify the component template of your choice
      component: PostTemplate,
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })
}