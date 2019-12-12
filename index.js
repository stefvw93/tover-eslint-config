module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["plugin:prettier/recommended", "prettier/react"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "warn",
    "@typescript-eslint/explicit-member-accessibility": [
      "warn",
      {
        accessibility: "explicit",
        overrides: {
          constructors: "off"
        }
      }
    ]
  },
  settings: {
    react: {
      version: "16.12"
    }
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/explicit-member-accessibility": "off"
      }
    }
  ]
};
