module.exports = {
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
    '@valtech-ch/eslint-config-base',
    // https://www.npmjs.com/package/eslint-config-airbnb-typescript
    'airbnb-typescript',
    'airbnb/hooks',

    // https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    // https://www.npmjs.com/package/eslint-plugin-cypress
    'plugin:cypress/recommended',

    // https://www.npmjs.com/package/eslint-plugin-import
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',

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
  rules: {
    // https://www.npmjs.com/package/eslint-plugin-react
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
