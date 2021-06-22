(this["webpackJsonp@uiw/react-run-web"]=this["webpackJsonp@uiw/react-run-web"]||[]).push([[0],{144:function(e,t,n){e.exports={tag:"Tag_tag__2crL0"}},561:function(e,t,n){},562:function(e,t,n){"use strict";n.r(t);var i=n(139),r=n.n(i),c=n(0),s=n.n(c),o=n(51),l=n(2),a=n(52),d=n(38),h=n(84),u=n(25),j=n.n(u),b=n(30),p=n.n(b),m=["html","css","js","title"],v=s.a.forwardRef((function(e,t){var n=e.html,i=void 0===n?"":n,r=e.css,o=e.js,l=e.title,a=void 0===l?"Demo Title":l,d=p()(e,m),h=Object(c.useMemo)((function(){var e=o?'<script type="text/javascript">'.concat(o,"<\/script>"):"",t=r?"<style>".concat(r,"</style>"):"";return"<!DOCTYPE html><html><head>".concat(t,"</head><body>").concat(i).concat(e,"</body></html>")}),[r,i,o]);return s.a.createElement("iframe",j()({title:a,width:"100%",height:"100%",style:{border:0}},d,{ref:t,srcDoc:h}))})),f=n(85),x=n.n(f),g=n(144),O=n.n(g),w=n(1);function y(e){var t=e.color;return Object(w.jsx)("div",{className:O.a.tag,style:{color:"#fff",borderColor:t,backgroundColor:t,opacity:.9},children:e.children})}var C=function(e){return Object(w.jsx)("textarea",Object(d.a)({draggable:!0,style:{width:"100%",resize:"none",position:"relative",border:0,padding:5}},e))};function S(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(""),s=Object(a.a)(r,2),d=s[0],u=s[1],j=Object(c.useState)(""),b=Object(a.a)(j,2),p=b[0],m=b[1],f=new URLSearchParams(Object(l.f)().search);return Object(c.useEffect)((function(){var e=f.get("html"),t=f.get("css"),n=f.get("js");e&&i(e),t&&u(t),n&&m(n)}),[]),Object(w.jsxs)("div",{style:{minHeight:"100vh"},children:[Object(w.jsxs)("div",{className:x.a.header,children:["Run Web",Object(w.jsxs)("div",{className:x.a.menu,children:[Object(w.jsx)("a",{href:"https://github.com/uiwjs/react-run-web",target:"__blank",children:"Github"}),Object(w.jsx)(o.b,{to:"/docs",children:"Docs"})]})]}),Object(w.jsxs)(h.a,{style:{width:"100%",height:"calc(100vh - 39px)"},children:[Object(w.jsxs)(h.a,{lineBar:!0,mode:"vertical",style:{minWidth:120,width:"43%"},children:[Object(w.jsxs)("div",{style:{height:"40%",display:"flex",padding:1,position:"relative",backgroundColor:"#fff"},children:[Object(w.jsx)(y,{color:"#e94d27",children:"HTML"}),Object(w.jsx)(C,{value:n,placeholder:"Please enter HTML code.",onChange:function(e){i(e.target.value)}})]}),Object(w.jsxs)("div",{style:{height:"30%",display:"flex",padding:1,position:"relative",backgroundColor:"#fff",zIndex:2},children:[Object(w.jsx)(y,{color:"#dfa424",children:"JS"}),Object(w.jsx)(C,{value:p,placeholder:"Please enter JavaScript code.",onChange:function(e){m(e.target.value)}})]}),Object(w.jsxs)("div",{style:{height:"30%",display:"flex",padding:1,position:"relative",backgroundColor:"#fff",zIndex:3},children:[Object(w.jsx)(y,{color:"#0874b7",children:"CSS"}),Object(w.jsx)(C,{value:d,placeholder:"Please enter CSS code.",onChange:function(e){u(e.target.value)}})]})]}),Object(w.jsx)("div",{style:{minWidth:120,flex:1},children:Object(w.jsx)(v,{css:d,js:p,html:n})})]})]})}var W=n(152);function _(){return Object(w.jsx)("div",{style:{margin:"0 auto",maxWidth:650,paddingTop:50,paddingBottom:60},children:Object(w.jsx)(W.a,{source:"Run Web\n===\n\nOnline Code Editor for Rapid Web Development, [Preview Demo](https://uiwjs.github.io/react-run-web#/?html=<div>Hello%20World</div>&js=console.log('hello%20world')&css=div%20{%20color:%20red;}).\n\n## Install\n\n```bash\nnpm install @uiw/react-run-web\n```\n\n## Usage\n\n```jsx\nimport RunWeb from '@uiw/react-run-web';\n\n<RunWeb\n  css=\"div {color:red;}\"\n  js=\"console.log('hello world!')\"\n  html=\"<div>ttt</div>\"\n/>\n```\n\n## Props\n\n```ts\ninterface RunWebProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {\n  css?: string;\n  js?: string;\n  html?: string;\n  title?: string;\n}\n```\n\n## Online Code Preview\n\n[Preview Demo Example](https://uiwjs.github.io/react-run-web#/?html=<div>Hello%20World</div>&js=console.log('hello%20world')&css=div%20{%20color:%20red;}).\n\n```url\nhttps://uiwjs.github.io/react-run-web#/?html=...&js=...&css=...\n```\n\n## Development\n\nRuns the project in development mode.  \n\n```bash\n# Step 1, run first, listen to the component compile and output the .js file\n# listen for compilation output type .d.ts file\nnpm run watch\n# Step 2, development mode, listen to compile preview website instance\nnpm run start\n```\n\n**`production`**\n\nBuilds the app for production to the build folder.\n\n```bash\nnpm run build\n```\n\nThe build is minified and the filenames include the hashes.\nYour app is ready to be deployed!"})})}n(561);var P=function(){return Object(w.jsx)(o.a,{children:Object(w.jsx)("div",{children:Object(w.jsxs)(l.c,{children:[Object(w.jsx)(l.a,{exact:!0,path:"/",children:Object(w.jsx)(S,{})}),Object(w.jsx)(l.a,{path:"/docs",children:Object(w.jsx)(_,{})})]})})})};r.a.render(Object(w.jsx)(P,{}),document.getElementById("root"))},85:function(e,t,n){e.exports={header:"index_header__3jKl4",menu:"index_menu__7Iclo"}}},[[562,1,2]]]);
//# sourceMappingURL=main.433e55d0.chunk.js.map