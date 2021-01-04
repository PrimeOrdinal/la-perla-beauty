/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      query AllProducts {
        allBigCommerceProducts {
          edges {
            node {
              name
              price
              id
              sku
              custom_url {
                url
              }
            }
          }
        }
      }
    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const productTemplate = path.resolve(`src/pages/product.tsx`)

  result.data.allBigCommerceProducts.edges.forEach(({ node }) => {
    const path = node.custom_url.url
    console.log('node', node)
    createPage({
      path,
      component: productTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        product: node
      },
    })
  })
}
