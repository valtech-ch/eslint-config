# eslint-config

Configuration and rules for ESLint, Prettier and Typescript.

## Install

Add this package

    yarn add -D @valtech-ch/eslint-config

Add peer dependencies (for existing projects maybe you prefer to add them manually)

    npx install-peerdeps -D @valtech-ch/eslint-config

Initialize TypeScript if you did not so far

    tsc --init

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

Setup ESLint configuration and rules in `.eslintrc.js`:

    module.exports = {
        extends: [
            "@valtech-ch/eslint-config/config",
            "@valtech-ch/eslint-config/rules"
        ]
    }

That's all, you don't need anything else in this file. You can use your custom configuration extending just the rules:

    module.exports = {
        // your custom config
        extends: [
            "@valtech-ch/eslint-config/rules"
        ]
    }

Setup prettier in `prettier.config.js`:

    module.exports = require("@valtech-ch/eslint-config/prettier.config")

Setup Typescript in `tsconfig.json`

    { "extends": "@valtech-ch/eslint-config/tsconfig" }
