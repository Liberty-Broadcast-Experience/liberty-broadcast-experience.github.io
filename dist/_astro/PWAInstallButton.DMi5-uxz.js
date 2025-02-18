import{r as n}from"./index.DhYZZe0J.js";var u={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=n,_=Symbol.for("react.element"),E=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,k=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L={key:!0,ref:!0,__self:!0,__source:!0};function v(r,e,l){var t,o={},a=null,d=null;l!==void 0&&(a=""+l),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(d=e.ref);for(t in e)I.call(e,t)&&!L.hasOwnProperty(t)&&(o[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)o[t]===void 0&&(o[t]=e[t]);return{$$typeof:_,type:r,key:a,ref:d,props:o,_owner:k.current}}c.Fragment=E;c.jsx=v;c.jsxs=v;u.exports=c;var s=u.exports;function j(){const[r,e]=n.useState(null),[l,t]=n.useState(!1),[o,a]=n.useState(!1),[d,x]=n.useState(!1),[h,w]=n.useState(!1);n.useEffect(()=>{const p=/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()),g=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),b=/firefox/i.test(navigator.userAgent);a(p||g),w(b);const i=()=>{(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone)&&x(!0)};i();const f=m=>{m.preventDefault(),e(m),t(!0)};return window.addEventListener("beforeinstallprompt",f),window.addEventListener("DOMContentLoaded",i),window.addEventListener("visibilitychange",i),()=>{window.removeEventListener("beforeinstallprompt",f),window.removeEventListener("DOMContentLoaded",i),window.removeEventListener("visibilitychange",i)}},[]);const y=async()=>{if(r){r.prompt();const{outcome:p}=await r.userChoice;console.log("User choice:",p),t(!1)}else o&&alert("To install this app on iOS or Safari, tap the Share button and select 'Add to Home Screen'.")};return s.jsxs(s.Fragment,{children:[h?s.jsx("p",{className:"fallback-text",children:"It appears you are using Firefox. This application is not supported on this browser."}):d?s.jsx("p",{className:"fallback-text",children:"App is already installed."}):(l||o)&&s.jsx("button",{onClick:y,className:"action primary",children:o?"Add to Home Screen":"Install App"}),s.jsx("style",{children:`
          .action {
            display: inline-flex;
            gap: 0.5em;
            align-items: center;
            border-radius: 999rem;
            padding: 0.5rem 1.125rem;
            color: var(--sl-color-white);
            line-height: 1.1875;
            text-decoration: none;
            font-size: var(--sl-text-sm);
            border: none;
            cursor: pointer;
          }
          .action.primary {
            background: var(--sl-color-text-accent);
            color: var(--sl-color-black);
          }
          .fallback-text {
            font-size: var(--sl-text-base);
            color: var(--sl-color-text);
            text-align: left;
            margin-top: 1rem;
          }
          @media (min-width: 50rem) {
            .action {
              font-size: var(--sl-text-base);
              padding: 1rem 1.25rem;
            }
          }
        `})]})}export{j as default};
