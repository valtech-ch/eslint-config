module.exports = {
  extends: ['./index.js'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'cypress/globals': true,
    jest: true,
    // https://www.npmjs.com/package/eslint-plugin-jest#usage
    'jest/globals': true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: 'tsconfig.json',
      },
    },
    react: {
      version: 'detect',
    },
  },
}
