Run Web
===

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
  html="<div>ttt</div>"
/>
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

**production**

Builds the app for production to the build folder.

```bash
npm run build
```

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!