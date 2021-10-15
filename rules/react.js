module.exports = {
  extends: ['./index.js'],
  rules: {
    // https://www.npmjs.com/package/eslint-plugin-jest
    'jest/expect-expect': 'off',

    // https://www.npmjs.com/package/eslint-plugin-react
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
