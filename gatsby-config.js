module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-bigcommerce",
      options: {
        // REQUIRED
        accessToken: process.env.BIGCOMMERCE_ACCESS_TOKEN,
        clientId: process.env.BIGCOMMERCE_CLIENT_ID,
        secret: process.env.BIGCOMMERCE_CLIENT_SECRET,
        storeHash: process.env.BIGCOMMERCE_STORE_HASH,

        // endpoint: "/catalog/products",

        // OPTIONAL
        logLevel: "info",
        // nodeName: "BigCommerceNode",
        apiVersion: "v3",

        // Multiple endpoints in an object.
        endpoints: {
          BigCommerceProducts: "/catalog/products",
          BigCommerceCategories: "/catalog/categories",
          // BigCommerceStore: "/catalog/store",
        },

        preview: true
      },
    },
    {
      resolve: `gatsby-source-contentstack`,
      options: {
        // Required: API Key is a unique key assigned to each stack.
        api_key: process.env.CONTENTSTACK_API_KEY,

        // Required: Delivery Token is a read-only credential.
        delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,

        // Required: Environment where you published your data.
        environment: process.env.CONTENTSTACK_ENVIRONMENT,

        // Optional: CDN set this to point to other cdn end point. For eg: https://eu-cdn.contentstack.com/v3
        cdn: `https://eu-cdn.contentstack.com/v3`,

        // Optional: expediteBuild set this to either true or false
        expediteBuild: true,

        // Optional: Specify true if you want to generate custom schema
        enableSchemaGeneration: true,

        // Optional: Specify a different prefix for types. This is useful in cases where you have multiple instances of the plugin to be connected to different stacks.
        type_prefix: `Contentstack`, // (default)

        // Optional: Specify true if you want to download all your contentstack images locally
        downloadImages: false,
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          // MarkdownRemark: {
          //   title: node => node.frontmatter.title,
          //   tags: node => node.frontmatter.tags,
          //   path: node => node.frontmatter.path,
          // },
          BigCommerceProducts: {
            title: node => node.name,
            sku: node => node.sku,
          }
        },
        // Optional filter to limit indexed nodes
        filter: (node, getNode) => node.tags !== "exempt",
      },
    },
  ],
}
