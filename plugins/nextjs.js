module.exports = {
  plugins: ['cypress', 'jest', 'jest-dom', 'testing-library'],
  extends: [
    // https://www.npmjs.com/package/eslint-plugin-cypress
    'plugin:cypress/recommended',

    // https://www.npmjs.com/package/eslint-plugin-jest
    'plugin:jest/recommended',
    'plugin:jest/style',

    // https://github.com/testing-library/eslint-plugin-jest-dom
    'plugin:jest-dom/recommended',

    // https://github.com/testing-library/eslint-plugin-testing-library
    'plugin:testing-library/react',

    /**
     * Make sure to put prettier last, so it gets the chance to override other
     * configs.
     *
     * @see https://github.com/prettier/eslint-config-prettier
     */
    'prettier',
  ],
}
