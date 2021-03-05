module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/jsx-indent': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/state-in-constructor': 0,
    'no-unused-vars': 0,
  },
};
