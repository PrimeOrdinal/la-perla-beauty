[![Netlify Status](https://api.netlify.com/api/v1/badges/1b746c0f-a282-4910-93ed-07ef219c91a7/deploy-status)](https://app.netlify.com/sites/la-perla-beauty-row/deploys)

<header>
Beauty by La Perla
============
A Gatsby project built in TypeScript
</header>

# Overview

## Services

| Service              | Provider          | Hosting | Administration URL                                                                         |
| -------------------- | ----------------- | ------- | ------------------------------------------------------------------------------------------ |
| CMS                  | Contentstack      | Hosted  | https://eu-app.contentstack.com/#!/stacks                                                  |
| CMS Preview          | Gatsby Cloud      | Hosted  | https://www.gatsbyjs.com/dashboard/organization/88452f49-9dff-40f5-8dee-e50c65c2ba8f/sites |
| Hosting (staging)    | Gatsby Cloud      | Hosted  | https://www.gatsbyjs.com/dashboard/organization/88452f49-9dff-40f5-8dee-e50c65c2ba8f/sites |
| Hosting (production) | Netlify           | Hosted  | https://app.netlify.com/teams/pamela-reynolds/overview                                     |
| Serverless Functions | Netlify Functions | Hosted  | https://app.netlify.com/teams/pamela-reynolds/overview                                     |
| Component UI Review  | Chromatic         | Hosted  | https://www.chromatic.com/setup?appId=6058df24fa28ac00215e2c8f                             |
| Designs              | InVision          | Hosted  | https://www.invisionapp.com/                                                               |
| Ecommerce Stores     | BigCommerce       | Hosted  | https://login.bigcommerce.com/login                                                        |

## Technology Stack

| Aspect                  | Provider          | URL                                              |
| ----------------------- | ----------------- | ------------------------------------------------ |
| Language                | TypeScript        | https://www.typescriptlang.org/                  |
| Static Site Generator   | Gatsby            | https://www.gatsbyjs.com/                        |
| User Interface          | React             | https://reactjs.org/                             |
| Component Styling       | Styled Components | https://styled-components.com/                   |
| Component Design System | Styled System     | https://styled-system.com/                       |
| Component Explorer      | Storybook         | https://storybook.js.org/                        |
| Serverless Functions    | Netlify Functions | https://docs.netlify.com/functions/overview/     |
| Theme Specification     | Theme UI          | https://github.com/system-ui/theme-specification |
| Build Tool              | Netlify CLI       | https://cli.netlify.com/                         |

# Prerequisites

Before attempting to run the project, you will require API credentials for BigCommerce and Contentstack.

## Environment Variables

Ensure that the following envionrment variables are set before attempting to run Gatsby locally:

- BIGCOMMERCE_ACCESS_TOKEN
- BIGCOMMERCE_CLIENT_ID
- BIGCOMMERCE_CLIENT_SECRET
- BIGCOMMERCE_STORE_HASH
- BIGCOMMERCE_STORE_SUBDOMAIN
- BIGCOMMERCE_STOREFRONT_TOKEN
- CONTENTSTACK_API_KEY
- CONTENTSTACK_DELIVERY_TOKEN
- CONTENTSTACK_ENVIRONMENT
- CONTENTSTACK_MANAGEMENT_TOKEN
- GATSBY_SITE_URL
- SITE_AUTHOR
- SITE_DESCRIPTION
- SITE_TITLE

Place these into a `.env` file in the project root in order for Netlify Dev to set the environment variables. Please see the [.example-env](./.example-env) file in this repository for an example of the values for these variables.

## git Configuration

If you will be developing on a MacOS or Windows environment, you are highly advised to run `git config core.ignorecase false` in order to use the checkout of this repository with case sensitive file names. Failure to do so may result in diferences in behaviour to the Linux-based deployment pipelines and runtimes on Gatsby Cloud and Netlify.

# Developing with Gatsby

## Quick start

1.  **Install dependencies.**

    Navigate into the site’s directory and install dependencies.

    ```shell
    npm install
    ```

1.  **Start Gatsby.**

    Navigate into the site’s directory and start Gatsby.

    ```shell
    npm start
    ```

1.  **View the site.**

    Your site should now be running at `http://localhost:8888`

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

## What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that the project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of the site (what you see in the browser) such as the site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of the code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about the site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of the npm dependencies that were installed for the project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for the project.

12. **`README.md`**: A text file containing useful reference information about the project.

Please see the "Application Structure" section of this document for additional key paths.

## Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with Gatsby's [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to Gatsby's documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

# Developing with Storybook and Chromatic

Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more. It makes building UIs organized and efficient.

Chromatic is a web-based tool that automates gathering UI feedback, visual testing, and documentation, so developers can iterate faster with less manual work.

## Exploring Components with Storybook

1.  **Start Storybook.**

    Navigate into the site’s directory and start Storybook.

    ```shell
    npm run-script storybook
    ```

1.  **View the site.**

    Your Storybook instance should now be running at `http://localhost:6006`

## Deploying Components to Chromatic

Navigate into the site’s directory and start Storybook.

    ```shell
    npm run-script chromatic
    ```

_Note: There is currently an issue with the Chromatic deployment script:_ `npm run-script chromatic` will fail to build the Storybook locally.

As a workaround, the `--storybook-build-dir=storybook-static` flag has been added to the `npm run-script chromatic` script, which will require that `npm run-script build-storybook` is run manually before deploying to Chromatic.

## Application Structure

| Aspect                              | Path                         |
| ----------------------------------- | ---------------------------- |
| Netlify Functions                   | /.netlify/functions/src      |
| BigCommerce Email Templates         | /bigcommerce/email-templates |
| Contentstack Extensions             | /contentstack/extensions     |
| React Components                    | /src/components              |
| GraphQL Fragments                   | /src/graphql-fragments       |
| React Hooks                         | /src/hooks                   |
| Gatsby Static Page Templates        | /src/pages                   |
| Global Styles                       | /src/styles                  |
| Gatsby Dynamic Page Templates       | /src/templates               |
| Theme UI Theme                      | /src/theme                   |
| TypeScript Utility Functions        | /src/utils                   |
| Static Content                      | /static                      |
| Fonts                               | /static/fonts                |
| SVG Icons                           | /static/icons                |
| Storybook Stories                   | /stories                     |
| Storybook Stories Utility Functions | /stories/utils               |
| TypeScript Global Types             | /types                       |
| Dynamically-Generated GraphQL Types | /graphql-types.ts            |
| Netlify Configuration               | /netlify.toml                |

# Deployments

| User           | User Action                                            | Contentstack Stack | Contentstack Enviornment | GitHub repository branch | Deployment URL(s)                                     | Notes                      |
| -------------- | ------------------------------------------------------ | ------------------ | ------------------------ | ------------------------ | ----------------------------------------------------- | -------------------------- |
| Developer      | Push code to staging branch in GitHub repository       | US                 | Staging                  | staging                  | https://staging.us.beautybylaperla.com/               |                            |
| Developer      | Push code to staging branch in GitHub repository       | RoW                | Staging                  | staging                  | https://staging.www.beautybylaperla.com/              |                            |
| Developer      | Push code to main branch in GitHub repository          | US                 | Production               | main                     | https://us.beautybylaperla.com/                       |                            |
| Developer      | Push code to main branch in GitHub repository          | RoW                | Production               | main                     | https://www.beautybylaperla.com/                      |                            |
| Content Editor | Publish content to Contentstack localhost Environment  | US                 | localhost                | N/A                      | http://localhost:8888                                 | RoW/US toggled via API key |
| Content Editor | Publish content to Contentstack Preview Environment    | US                 | Preview                  | staging                  | https://preview-beautybylaperlacomstagingus.gtsb.io/  |                            |
| Content Editor | Publish content to Contentstack Staging Environment    | US                 | Staging                  | staging                  | https://staging.us.beautybylaperla.com/               |                            |
| Content Editor | Publish content to Contentstack Production Environment | US                 | Production               | main                     | https://us.beautybylaperla.com/                       |                            |
| Content Editor | Publish content to Contentstack localhost Environment  | RoW                | localhost                | N/A                      | http://localhost:8888                                 | RoW/US toggled via API key |
| Content Editor | Publish content to Contentstack Preview Environment    | RoW                | Preview                  | staging                  | https://preview-beautybylaperlacomstagingrow.gtsb.io/ |                            |
| Content Editor | Publish content to Contentstack Staging Environment    | RoW                | Staging                  | staging                  | https://staging.www.beautybylaperla.com/              |                            |
| Content Editor | Publish content to Contentstack Production Environment | RoW                | Production               | main                     | https://www.beautybylaperla.com/                      |                            |

# Tools

## Useful Browser Extensions

https://www.gatsbyjs.com/docs/conceptual/making-your-site-accessible/

https://developers.google.com/web/tools/lighthouse/

https://www.deque.com/axe/

https://accessibilityinsights.io/docs/en/web/overview/

https://chrome.google.com/webstore/detail/schema-builder-tester-for/klohjdodjjeocpbpadmkcndjoadijgjg
