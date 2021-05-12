# eslint-config

Configuration and rules for ESLint, Prettier and TypeScript.

We recommend and assume your project to have TypeScript.

## Install

Add this package

    yarn add -D @valtech-ch/eslint-config

Add peer dependencies (for existing projects maybe you prefer to add them manually)

    npx install-peerdeps -D @valtech-ch/eslint-config

## Content

This package contains configurations and rules:

### For JavaScript

    @valtech-ch/eslint-config/config
    @valtech-ch/eslint-config/plugins
    @valtech-ch/eslint-config/rules

### For React

    @valtech-ch/eslint-config/config/react
    @valtech-ch/eslint-config/plugins/react
    @valtech-ch/eslint-config/rules/react

### For Next.js

    @valtech-ch/eslint-config/config/react
    @valtech-ch/eslint-config/plugins/react
    @valtech-ch/eslint-config/rules/nextjs

## Usage

1. To setup ESLint, create a `.eslintrc.js` file with

   - this content if you want our given config:

```js
module.exports = {
  extends: [
    '@valtech-ch/eslint-config/config',
    '@valtech-ch/eslint-config/plugins',
    '@valtech-ch/eslint-config/rules',
  ],
}
```

- or this content if you want your own config instead:

```js
module.exports = {
  // your custom config
  extends: [
    '@valtech-ch/eslint-config/plugins',
    '@valtech-ch/eslint-config/rules',
  ],
}
```

2. To setup Prettier, create a `prettier.config.js` file with this content:

   `module.exports = require("@valtech-ch/eslint-config/prettier.config")`

3. To setup TypeScript, create a `tsconfig.json` file with

   - this content for non-React projects:

   `{ "extends": "@valtech-ch/eslint-config/tsconfig" }`

   - this content for React projects:

   `{ "extends": "@valtech-ch/eslint-config/tsconfig.react" }`
