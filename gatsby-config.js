var proxy = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    author: process.env.SITE_AUTHOR,
    description: process.env.SITE_DESCRIPTION,
    siteUrl: process.env.GATSBY_SITE_URL,
    title: process.env.SITE_TITLE,
  },
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
    FAST_REFRESH: true,
    PARALLEL_SOURCING: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true, // defaults to false
        // jsxPragma: "jsx", // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    // "gatsby-plugin-extract-schema",
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        codegen: process.env.GRAPHQL_CODEGEN,
        // fileName: `./gatsby-graphql.ts`,
        documentPaths: [
          "./src/**/*.tsx",
          // './node_modules/gatsby-*/**/*.js',
          "./node_modules/gatsby*/!(node_modules)/**/*.js",
          "./gatsby-node.js",
          // './gatsby-node.ts',
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    // {
    //   resolve: "gatsby-plugin-i18n",
    //   options: {
    //     langKeyDefault: "en",
    //     useLangKeyLayout: false,
    //   },
    // },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        // Add any options here
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: "${__dirname}/src/images",
    //   },
    // },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Quicksand:400,600"],
        },
      },
    },
    "gatsby-plugin-svgr",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/favicon.svg", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sitemap",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "BigCommerceGQL",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "bigCommerceGQL",
        // Url to query from
        url:
          "https://" +
          process.env.BIGCOMMERCE_STORE_SUBDOMAIN +
          ".mybigcommerce.com/graphql",
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: "Bearer " + process.env.BIGCOMMERCE_STOREFRONT_TOKEN,
        },
        batch: true,
        dataLoaderOptions: {
          maxBatchSize: 10,
        },
        refetchInterval: 360,
      },
    },
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
          // BigCommerceBrands: "/catalog/brands",
          BigCommerceCategories: "/catalog/categories",
          BigCommerceProducts: "/catalog/products",
        },

        preview: true,
      },
    },
    {
      resolve: "gatsby-source-contentstack",
      options: {
        // Required: API Key is a unique key assigned to each stack.
        api_key: process.env.CONTENTSTACK_API_KEY,

        // Required: Delivery Token is a read-only credential.
        delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,

        // Required: Environment where you published your data.
        environment: process.env.CONTENTSTACK_ENVIRONMENT,

        // Optional: CDN set this to point to other cdn end point. For eg: https://eu-cdn.contentstack.com/v3
        cdn: "https://eu-cdn.contentstack.com/v3",

        // Optional: expediteBuild set this to either true or false
        expediteBuild: true,

        // Optional: Specify true if you want to generate custom schema
        enableSchemaGeneration: false,

        // Optional: Specify a different prefix for types. This is useful in cases where you have multiple instances of the plugin to be connected to different stacks.
        type_prefix: "Contentstack", // (default)

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
      resolve: "@gatsby-contrib/gatsby-plugin-elasticlunr-search",
      options: {
        // Fields to index
        fields: ["title", "sku"],
        // How to resolve each field"s value for a supported node type
        resolvers: {
          // List how to resolve the fields" values
          BigCommerceProducts: {
            // BigCommerceGql_Product: {
            image_url: function (node) {
              return node.image_url
              // return node.image[0]
            },
            path: function (node) {
              return node.custom_url.url
              // return node.path
            },
            sku: function (node) {
              return node.sku
            },
            title: function (node) {
              return node.name
            },
          },
        },
        // Optional filter to limit indexed nodes
        filter: function (node, getNode) {
          return node.tags !== "exempt"
        },
      },
    },
    {
      resolve: "gatsby-plugin-breadcrumb",
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        autoGenHomeLabel: "Home",
        // exlude: optional, include this array to overwrite paths you don't want to
        // generate breadcrumbs for.
        exclude: [
          "/dev-404-page/",
          "/404/",
          "/404.html",
          "/offline-plugin-app-shell-fallback/",
        ],
        // crumbLabelUpdates: optional, update specific crumbLabels in the path
        // crumbLabelUpdates: [
        //   {
        //     pathname: "  /book"  ,
        //     crumbLabel: "  Books"
        //   }
        // ],
        // trailingSlashes: optional, will add trailing slashes to the end
        // of crumb pathnames. default is false
        trailingSlashes: true,
        // usePathPrefix: optional, if you are using pathPrefix above
        // usePathPrefix: "/blog",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "YOUR_GOOGLE_TAGMANAGER_ID",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      },
    },
    // {
    //   resolve: 'gatsby-plugin-a11y-report',
    //   options: {
    //     showInProduction: false,
    //     toastAutoClose: false,
    //     query: "
    //       {
    //         allSitePage(
    //           filter: {
    //             path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
    //           }
    //         ) {
    //           edges {
    //             node {
    //               path
    //             }
    //           }
    //         }
    //       }
    //     ",
    //     ignoreCheck: [
    //       '/404*',
    //       '/tag/*'
    //     ],
    //     serverOptions: {
    //       host: 'localhost',
    //       port: '8341'
    //     },
    //     axeOptions: {
    //       locale: 'en',
    //     },
    //     loggingOptions: {
    //       result: ['violations', 'incomplete']
    //     }
    //   },
    // },
    {
      resolve: "gatsby-plugin-stylelint",
      options: {
        emitError: false,
        emitWarning: true,
        files: ["**/*.{ts,tsx}"],
      },
    },
    "gatsby-plugin-netlify",
  ],
}
