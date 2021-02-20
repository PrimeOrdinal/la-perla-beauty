/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")

const stripSlashes = (text) => text.replace(/([^:]\/)\/+/g, "$1")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      query AllProducts {
        allContentstackPages {
          edges {
            node {
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
        bigCommerceGQL {
          site {
            categoryTree {
              children {
                description
                entityId
                name
                path
                productCount
              }
              description
              entityId
              name
              path
              productCount
            }
            products {
              edges {
                node {
                  description
                  entityId
                  id
                  images {
                    edges {
                      node {
                        altText
                        isDefault
                        urlOriginal
                      }
                    }
                  }
                  inventory {
                    aggregated {
                      availableToSell
                      warningLevel
                    }
                    hasVariantInventory
                    isInStock
                  }
                  name
                  path
                  sku
                }
              }
            }
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
    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for pages.
  result.data.allContentstackPages.edges.forEach(({ node }) => {
    const pagePath = node.url

    createPage({
      path: pagePath,
      component: path.resolve(`src/pages/${node.template}.tsx`),
      // In your template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the API.
      context: {
        page: node,
      },
    })
  })

  // Create pages for categories.
  const categoryTemplate = path.resolve(`src/pages/category.tsx`)

  result.data.bigCommerceGQL.site.categoryTree.forEach((node) => {
    const pagePath = node.path

    createPage({
      path: pagePath,
      component: categoryTemplate,
      // In your template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the API.
      context: {
        category: node,
        id: node.entityId
      },
    })
  })

  // Create pages for products.
  const productTemplate = path.resolve(`src/pages/product.tsx`)

  result.data.bigCommerceGQL.site.products.edges.forEach(({ node }) => {
    const pagePath = node.path

    createPage({
      path: pagePath,
      component: productTemplate,
      // In your template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the API.
      context: {
        node
      },
    })
  })
}
