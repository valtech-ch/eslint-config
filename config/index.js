module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    project: ['./tsconfig.json'],
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    'shared-node-browser': true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: 'tsconfig.json',
      },
    },
  },
}
