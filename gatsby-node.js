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
        allBigCommerceCategories {
          edges {
            node {
              bigcommerce_id
              custom_url {
                url
              }
              default_product_sort
              description
              id
              image_url
              is_visible
              layout_file
              meta_description
              meta_keywords
              name
              page_title
              parent_id
              search_keywords
              sort_order
              views
            }
          }
        }
        allBigCommerceProducts {
          edges {
            node {
              availability
              calculated_price
              categories
              custom_url {
                url
              }
              depth
              description
              fixed_cost_shipping_price
              gtin
              height
              id
              images {
                description
                id
                is_thumbnail
                sort_order
                url_standard
              }
              inventory_level
              inventory_warning_level
              is_featured
              is_free_shipping
              is_preorder_only
              is_price_hidden
              is_visible
              mpn
              name
              preorder_message
              price
              price_hidden_label
              sale_price
              sku
              upc
              weight
              width
            }
          }
        }
        allContentstackPages {
          edges {
            node {
              template
              title
              url
              locale
              publish_details {
                time
                user
                environment
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

  result.data.allBigCommerceCategories.edges.forEach(({ node }) => {
    const pagePath = node.custom_url.url

    createPage({
      path: pagePath,
      component: categoryTemplate,
      // In your template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the API.
      context: {
        category: node,
        id: node.bigcommerce_id
      },
    })
  })

  // Create pages for products.
  const productTemplate = path.resolve(`src/pages/product.tsx`)

  result.data.allBigCommerceProducts.edges.forEach(({ node }) => {
    const pagePath = node.custom_url.url

    createPage({
      path: pagePath,
      component: productTemplate,
      // In your template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the API.
      context: {
        node,
        categoryIds: node.categories
      },
    })
  })
}
