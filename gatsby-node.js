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
        allBigCommerceCategories {
          edges {
            node {              
              custom_url {
                url
              }
              default_product_sort
              description
              id
              image_url
              is_visible
              meta_description
              meta_keywords
              parent_id
              sort_order
              title: name
            }
          }
        }
        allBigCommerceProducts {
          edges {
            node {
              custom_url {
                url
              }
              availability
              calculated_price
              categories
              depth
              description
              fixed_cost_shipping_price
              gtin
              height
              id
              inventory_level
              inventory_warning_level
              is_featured
              is_free_shipping
              is_preorder_only
              is_price_hidden
              is_visible
              mpn
              order_quantity_maximum
              order_quantity_minimum
              preorder_message
              price
              price_hidden_label
              sale_price
              sku
              title: name
              upc
              weight
              width
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

  // Create pages for categories.
  const categoryTemplate = path.resolve(`src/pages/category.tsx`)
  
  result.data.allBigCommerceCategories.edges.forEach(({ node }) => {
    const path = node.custom_url.url

    createPage({
      path,
      component: categoryTemplate,
      // In your template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the API.
      context: {
        category: node
      },
    })
  })

  // Create pages for products.
  const productTemplate = path.resolve(`src/pages/product.tsx`)
  result.data.allBigCommerceProducts.edges.forEach(({ node }) => {
    const path = node.custom_url.url

    createPage({
      path,
      component: productTemplate,
      // In your template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the API.
      context: {
        product: node
      },
    })
  })
}
