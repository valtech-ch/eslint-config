# eslint-config-react

Add this package

    yarn add -D @valtech-ch/eslint-config

Add peer dependencies

    npx install-peerdeps -D @valtech-ch/eslint-config

Config eslint: `.eslintrc.js` and `.eslintignore`,

    echo 'module.exports = {extends: ["@valtech-ch/eslint-config/config/react", "@valtech-ch/eslint-config/rules/react"] }' >> .eslintrc.js
    echo '.eslintrc.js' >> .eslintignore
    echo 'prettier.config.js' >> .eslintignore

Config prettier: `prettier.config.js`

    echo 'module.exports = require("@valtech-ch/eslint-config/prettier.config")' >> prettier.config.js

Config typescript: `tsconfig.json`

    echo '{"extends": "@valtech-ch/eslint-config/tsconfig"}' >> tsconfig.json
