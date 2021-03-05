# eslint-config-react

Add this package

    yarn add -D @valtech-ch/eslint

Add peer dependencies

    npx install-peerdeps -D @valtech-ch/eslint

Config eslint: `.eslintrc.js` and `.eslintignore`,

    echo 'module.exports = {extends: ["@valtech-ch/eslint/config/react", "@valtech-ch/eslint/rules/react"] }' >> .eslintrc.js
    echo '.eslintrc.js' >> .eslintignore
    echo 'prettier.config.js' >> .eslintignore

Config prettier: `prettier.config.js`

    echo 'module.exports = require("@valtech-ch/eslint/prettier.config")' >> prettier.config.js

Config typescript: `tsconfig.json`

    echo '{"extends": "@valtech-ch/eslint/tsconfig"}' >> tsconfig.json
