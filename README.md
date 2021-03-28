# eslint-config

Configuration and rules for ESLint, Prettier and Typescript.

## Install

Add this package

    yarn add -D @valtech-ch/eslint-config

Add peer dependencies (for existing projects maybe you prefer to add them manually)

    npx install-peerdeps -D @valtech-ch/eslint-config

## Content

This package contain configurations and rules:

### JavaScript

    @valtech-ch/eslint-config/config
    @valtech-ch/eslint-config/rules

### React

    @valtech-ch/eslint-config/config/react
    @valtech-ch/eslint-config/rules/react

### Next.js

    @valtech-ch/eslint-config/config/react
    @valtech-ch/eslint-config/rules/react
    @valtech-ch/eslint-config/rules/nextjs

## Usage

1. To setup ESLint, create a `.eslintrc.js` file with this content:

    module.exports = {
        extends: [
            "@valtech-ch/eslint-config/config",
            "@valtech-ch/eslint-config/rules"
        ]
    }

If instead of the given config you want a custom one, you can do it by having this `.eslintrc.json` file content instead:

    module.exports = {
        // your custom config
        extends: [
            "@valtech-ch/eslint-config/rules"
        ]
    }

1. To setup prettier, create a `prettier.config.js` file with this content:

    module.exports = require("@valtech-ch/eslint-config/prettier.config")

1. To setup TypeScript, create a `tsconfig.json` file with this content:

    { "extends": "@valtech-ch/eslint-config/tsconfig" }

