module.exports = {
  plugins: [
    'cypress',
    'jest',
    'jest-dom',
    'jsx-a11y',
    'react',
    'react-hooks',
    'testing-library',
  ],
  extends: [
    './index.js',
    // https://www.npmjs.com/package/eslint-config-airbnb-typescript
    'airbnb-typescript',
    'airbnb/hooks',

    // https://www.npmjs.com/package/eslint-plugin-cypress
    'plugin:cypress/recommended',

    // https://www.npmjs.com/package/eslint-plugin-jest
    'plugin:jest/recommended',
    'plugin:jest/style',

    // https://github.com/testing-library/eslint-plugin-jest-dom
    'plugin:jest-dom/recommended',

    // https://www.npmjs.com/package/eslint-plugin-jsx-a11y
    'plugin:jsx-a11y/recommended',

    // https://www.npmjs.com/package/eslint-plugin-react
    'plugin:react/recommended',

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
