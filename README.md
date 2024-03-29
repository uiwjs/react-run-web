Run Web
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![Build & Deploy](https://github.com/uiwjs/react-run-web/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-run-web/actions/workflows/ci.yml)
[![Coverage Status](https://uiwjs.github.io/react-run-web/badges.svg)](https://uiwjs.github.io/react-run-web/coverage/lcov-report)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-run-web/file/README.md)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-run-web)](https://www.npmjs.com/package/@uiw/react-run-web)
[![npm version](https://img.shields.io/npm/v/@uiw/react-run-web.svg)](https://www.npmjs.com/package/@uiw/react-run-web)
[![Open in Gitpod](https://shields.io/badge/Open%20in-Gitpod-green?logo=Gitpod)](https://gitpod.io/#https://github.com/uiwjs/react-run-web)

Online Code Editor for Rapid Web Development, [Preview Demo](https://uiwjs.github.io/react-run-web#/?html=<div>Hello%20World</div>&js=console.log('hello%20world')&css=div%20{%20color:%20red;}).

## Install

```bash
npm install @uiw/react-run-web
```

## Usage

```jsx
import RunWeb from '@uiw/react-run-web';

<RunWeb
  css="div {color:red;}"
  js="console.log('hello world!')"
  html="<div>hello world!</div>"
/>
```

## Props

```ts
interface RunWebProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  css?: string;
  js?: string;
  html?: string;
  title?: string;
  head?: React.ReactNode;
}
```

## Online Code Preview

[Preview Demo Example](https://uiwjs.github.io/react-run-web#/?html=<div>Hello%20World</div>&js=console.log('hello%20world')&css=div%20{%20color:%20red;}).

```url
https://uiwjs.github.io/react-run-web#/?html=...&js=...&css=...
```

## Development

Runs the project in development mode.  

```bash
# Step 1, run first, listen to the component compile and output the .js file
# listen for compilation output type .d.ts file
npm run watch
# Step 2, development mode, listen to compile preview website instance
npm run start
```

**`production`**

Builds the app for production to the build folder.

```bash
npm run build
```

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-run-web/graphs/contributors">
  <img src="https://uiwjs.github.io/react-run-web/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
