[![Netlify Status](https://api.netlify.com/api/v1/badges/1b746c0f-a282-4910-93ed-07ef219c91a7/deploy-status)](https://app.netlify.com/sites/la-perla-beauty-row/deploys)

<header>
Beauty by La Perla
============
A Gatsby project built in TypeScript
</header>

# Overview

## Site Deployments

Please see https://docs.google.com/spreadsheets/d/12t6VzoMRThSGNqsFaFbnvhcAuE5pZFUtOiMamb8slxI/edit#gid=0

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

# Repository Settings

## Repository Settings

On a MacOS or Windows environment, run `git config core.ignorecase false` in order to use this repository with case sensitive file names which otherwise may result in diferences in behaviour to the Linux-based deployment tools.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Clone repository

1.  **Start developing.**

    Navigate into the site’s directory and start it up.

    ```shell
    npm start
    ```

1.  **Open the source code and start editing!**

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

## Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with Gatsby's [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to Gatsby's documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

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

# Tools

## Browser Extensions

https://www.gatsbyjs.com/docs/conceptual/making-your-site-accessible/

https://developers.google.com/web/tools/lighthouse/

https://www.deque.com/axe/

https://accessibilityinsights.io/docs/en/web/overview/

https://chrome.google.com/webstore/detail/schema-builder-tester-for/klohjdodjjeocpbpadmkcndjoadijgjg
