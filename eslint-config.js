"use strict"

// var eslintConfig = require("./node_modules/gatsby/dist/utils/eslint-config.js")
//   .eslintConfig

// var defaultConfiguration = eslintConfig(null)

module.exports = {
  globals: {
    graphql: true,
    __PATH_PREFIX__: true,
    __BASE_PATH__: true, // this will rarely, if ever, be used by consumers
  },
  extends: [
    // require.resolve("eslint-config-react-app"),
    "react-app",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ["graphql", "formatjs", "@typescript-eslint", "prettier"],
  rules: {
    // New versions of react use a special jsx runtime that remove the requirement
    // for having react in scope for jsx. Once the jsx runtime is backported to all
    // versions of react we can make this always be "off".
    // I would also assume that eslint-config-react-app will switch their flag to "off"
    // when jsx runtime is stable in all common versions of React.
    "react/react-in-jsx-scope": "off",
    // Conditionally apply for reactRuntime?
    "import/no-webpack-loader-syntax": [0],
    // "graphql/template-strings": ["error"],
    "react/jsx-pascal-case": "off",
    // Prevents errors with Theme-UI and Styled component
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/master/docs/rules
    "jsx-a11y/accessible-emoji": "warn",
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/anchor-has-content": "warn",
    "jsx-a11y/anchor-is-valid": "warn",
    "jsx-a11y/aria-activedescendant-has-tabindex": "warn",
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-role": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    // TODO: It looks like the "autocomplete-valid" rule hasn't been published yet
    // "jsx-a11y/autocomplete-valid": [
    //   "warn",
    //   {
    //     inputComponents: [],
    //   },
    // ],
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/control-has-associated-label": [
      "warn",
      {
        ignoreElements: [
          "audio",
          "canvas",
          "embed",
          "input",
          "textarea",
          "tr",
          "video",
        ],
        ignoreRoles: [
          "grid",
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "row",
          "tablist",
          "toolbar",
          "tree",
          "treegrid",
        ],
        includeRoles: ["alert", "dialog"],
      },
    ],
    "jsx-a11y/heading-has-content": "warn",
    "jsx-a11y/html-has-lang": "warn",
    "jsx-a11y/iframe-has-title": "warn",
    "jsx-a11y/img-redundant-alt": "warn",
    "jsx-a11y/interactive-supports-focus": [
      "warn",
      {
        tabbable: [
          "button",
          "checkbox",
          "link",
          "progressbar",
          "searchbox",
          "slider",
          "spinbutton",
          "switch",
          "textbox",
        ],
      },
    ],
    //"jsx-a11y/label-has-for": "warn", was deprecated and replaced with jsx-a11y/has-associated-control in v6.1.0
    "jsx-a11y/label-has-associated-control": "warn",
    "jsx-a11y/lang": "warn",
    "jsx-a11y/media-has-caption": "warn",
    "jsx-a11y/mouse-events-have-key-events": "warn",
    "jsx-a11y/no-access-key": "warn",
    "jsx-a11y/no-autofocus": "warn",
    "jsx-a11y/no-distracting-elements": "warn",
    "jsx-a11y/no-interactive-element-to-noninteractive-role": "warn",
    "jsx-a11y/no-noninteractive-element-interactions": [
      "warn",
      {
        body: ["onError", "onLoad"],
        iframe: ["onError", "onLoad"],
        img: ["onError", "onLoad"],
      },
    ],
    "jsx-a11y/no-noninteractive-element-to-interactive-role": "warn",
    "jsx-a11y/no-noninteractive-tabindex": "warn",
    "jsx-a11y/no-onchange": "warn",
    "jsx-a11y/no-redundant-roles": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "jsx-a11y/scope": "warn",
    "jsx-a11y/tabindex-no-positive": "warn",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["**/*.js"],
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
}
