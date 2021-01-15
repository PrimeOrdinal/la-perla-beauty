const path = require("path")

module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended"
  ],
  "ignorePatterns": ["**/*.js"],
  "overrides": [
    {
      "files": ["**/*.tsx"],
      "rules": {
        "react/prop-types": "off"
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  // "parserOptions": {
  //   "ecmaFeatures": {
  //     "jsx": true
  //   },
  //   "ecmaVersion": 2020,
  //   "project": ["./tsconfig.json"],
  //   "sourceType": "module",
  //   "tsconfigRootDir": __dirname
  // },
  "plugins": ["graphql", "react", "@typescript-eslint", "prettier"],
  "root": true,
  "rules": {
    "graphql/template-strings": [
      "error",
      {
        env: "relay",
        schemaJsonFilepath: path.resolve(__dirname, "./schema.json"),
        tagName: "graphql"
      }
    ]
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {}
    },
    "react": {
      "version": "detect"
    }
  }
}
