// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "react-app",
    "react-app/jest",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // Możesz dostosować reguły według potrzeb
  },
  globals: {
    // Dodaj AOS jako globalną zmienną, aby ESLint o niej wiedział
    AOS: "readonly",
  },
};
