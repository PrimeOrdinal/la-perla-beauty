// import { linkToExecutor } from `@graphql-tools/links`
// import { wrapSchema } from `@graphql-tools/wrap`

module.exports = {
  siteMetadata: {
    author: process.env.SITE_AUTHOR,
    description: process.env.SITE_DESCRIPTION,
    siteUrl: process.env.SITE_URL,
    title: process.env.SITE_TITLE,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    `gatsby-plugin-lint-queries`,
    `gatsby-plugin-graphql-codegen`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: `en`,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/, // See below to configure properly
        },
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
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-bigcommerce`,
      options: {
        // REQUIRED
        accessToken: process.env.BIGCOMMERCE_ACCESS_TOKEN,
        clientId: process.env.BIGCOMMERCE_CLIENT_ID,
        secret: process.env.BIGCOMMERCE_CLIENT_SECRET,
        storeHash: process.env.BIGCOMMERCE_STORE_HASH,

        // endpoint: `/catalog/products`,

        // OPTIONAL
        logLevel: `info`,
        // nodeName: `BigCommerceNode`,
        apiVersion: `v3`,

        // Multiple endpoints in an object.
        endpoints: {
          BigCommerceProducts: `/catalog/products`,
          BigCommerceCategories: `/catalog/categories`,
          // BigCommerceStore: `/catalog/store`,
        },

        preview: true,
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

        // transformSchema: ({
        //   schema,
        //   link,
        //   resolver,
        //   defaultTransforms,
        //   options,
        // }) => {
        //   return wrapSchema(
        //     {
        //       schema,
        //       executor: linkToExecutor(link),
        //     },
        //     defaultTransforms
        //   )
        // }
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // List how to resolve the fields` values
          BigCommerceProducts: {
            image_url: node => node.image_url,
            path: node => node.custom_url.url,
            sku: node => node.sku,
            title: node => node.name,
          },
        },
        // Optional filter to limit indexed nodes
        filter: (node, getNode) => node.tags !== `exempt`,
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        autoGenHomeLabel: `Home`,
        // exlude: optional, include this array to overwrite paths you don't want to
        // generate breadcrumbs for.
        exclude: [
          `/dev-404-page/`,
          `/404/`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback/`,
        ],
        // crumbLabelUpdates: optional, update specific crumbLabels in the path
        // crumbLabelUpdates: [
        //   {
        //     pathname: '/book',
        //     crumbLabel: 'Books'
        //   }
        // ],
        // trailingSlashes: optional, will add trailing slashes to the end
        // of crumb pathnames. default is false
        trailingSlashes: true,
        // usePathPrefix: optional, if you are using pathPrefix above
        // usePathPrefix: '/blog',
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `YOUR_GOOGLE_TAGMANAGER_ID`,

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: `gatsby` },

        // Specify optional GTM environment details.
        gtmAuth: `YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING`,
        gtmPreview: `YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME`,
        dataLayerName: `YOUR_DATA_LAYER_NAME`,

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: `YOUR_ROUTE_CHANGE_EVENT_NAME`,
      },
    },
  ],
}
