module.exports = {
  rules: {
    // general ESLint rules
    'arrow-body-style': 'off',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'no-console': 'warn',
    'no-use-before-define': 'off',

    // https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/unbound-method': 'off',

    // https://www.npmjs.com/package/eslint-plugin-import
    'import/extensions': ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

    // https://www.npmjs.com/package/eslint-plugin-simple-import-sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
}
