module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: '16.10',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowTypedFunctionExpressions: true,
      },
    ],
  },
};
