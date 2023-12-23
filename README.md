# coin-portfolio

## Overview

This coin-portfolio comes with formatting, linting, example components, testing and styling. Here is the complete list of technologies and tooling used in this project:

- [Next.js](https://nextjs.org)
- [Chakra UI](https://chakra-ui.com/)
- [Jest](https://jestjs.io/) - Test runner
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Storybook](https://storybook.js.org/) - Component library
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting

## Installation

- `cd` into your project directory and run `npm install`.
- Run `npm run dev` to start the development server.
- Open your browser to `http://localhost:3000` to see the included example code running.

## Commands

- `npm run dev` - Starts the development server.
- `npm run test` - Runs the unit tests.
- `npm run storybook` - Starts the Storybook UI.
- `npm run lint` - Runs ESLint on the project.
- `npm run format:fix` - Formats code for the entire project

## Testing

### Unit testing

The unit tests for the home page can be found in the `__tests__` directory.

### Storybook's Accessibility testing

This coin-portfolio comes with the `@storybook/addon-a11y` which is used to check for common accessibility errors in your components. When you run `yarn run storybook`, each story will show detailed explanations with suggested fixes if errors are found.

## Chakra UI's Customizable theme

Inside the `src/pages/_app.tsx` directory, you will find the basic setup for customizing your theme, colors, and font styles using Chakra UI.

```js
const colors = {
  brand: {
    50: "#1a365d",
    100: "#153e75",
    500: "#2464ec",
  },
};

const fontWeights = {
  normal: 400,
  medium: 600,
  bold: 800,
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
};

export const theme = extendTheme({ colors, fontWeights, breakpoints });
```

## Architecture

At the root level, you will find all of the testing, linting, Prettier formatting, Storybook and TypeScript configurations along with the `src` and `public` directories.

Inside the `src` directory, you will find the following structure:

```
.
├── components
│   ├── atoms
│   ├── icons
│   ├── molecules
│   ├── organisms
│   ├── templates
│   └── index.ts
└── pages
    ├── _app.tsx
    └── index.tsx
```

## How to deploy your project

You can use services like Netlify or Vercel to deploy your application. Both of these services will come with a built-in CI/CD pipeline and live previews.
