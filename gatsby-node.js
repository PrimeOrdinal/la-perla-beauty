/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")

const stripSlashes = text => text.replace(/([^:]\/)\/+/g, "$1")

// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions
//   console.log(page)
// }

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(`
    query AllProducts {
      allContentstackArticle {
        edges {
          node {
            id
            locale
            publish_details {
              time
              user
              environment
            }
            title
            url
          }
        }
      }
      allContentstackPage {
        edges {
          node {
            id
            locale
            publish_details {
              time
              user
              environment
            }
            template
            title
            url
          }
        }
      }
      allBigCommerceProducts {
        edges {
          node {
            bigcommerce_id
            custom_url {
              url
            }
          }
        }
      }
      allBigCommerceCategories {
        edges {
          node {
            bigcommerce_id
            custom_url {
              url
            }
            description
            name
          }
        }
      }
      bigCommerceGQL {
        site {
          settings {
            status
            storeHash
            storeName
            url {
              cdnUrl
              vanityUrl
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for pages.
  result.data.allContentstackPage.edges.forEach(({ node }) => {
    const pagePath = node.url

    createPage({
      path: pagePath,
      component: path.resolve(`src/templates/${node.template}.tsx`),
      // In your template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the API.
      context: {
        contentstackId: node.id,
        page: node,
      },
    })
  })

  // Create pages for blog articles.
  result.data.allContentstackArticle.edges.forEach(({ node }) => {
    const pagePath = node.url

    createPage({
      path: pagePath,
      component: path.resolve(`src/templates/general.tsx`),
      // In your template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the API.
      context: {
        contentstackId: node.id,
        page: { breadcrumb: true, ...node },
      },
    })
  })

  // Create pages for categories.
  const categoryTemplate = path.resolve(`src/templates/category.tsx`)

  result.data.allBigCommerceCategories.edges.forEach(({ node }) => {
    const pagePath = node.custom_url.url

    createPage({
      path: pagePath,
      component: categoryTemplate,
      // In your template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the API.
      context: {
        category: node,
        id: node.bigcommerce_id,
      },
    })
  })

  // Create pages for products.
  const productTemplate = path.resolve(`src/templates/product.tsx`)

  result.data.allBigCommerceProducts.edges.forEach(({ node }) => {
    const pagePath = node.custom_url.url

    createPage({
      path: pagePath,
      component: productTemplate,
      context: {
        id: node.bigcommerce_id,
      },
    })
  })
}

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type Contentstack_sectionsModular_blocks implements Node {
//       menu {

//       }
//     }
//   `
//   createTypes(typeDefs)
// }
