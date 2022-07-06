import{r as e}from"./react.1be29800.js";import{c as l}from"./history.b2a2c9c4.js";import{R as u}from"./react-router.c7791876.js";/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function h(a){let{basename:n,children:i,window:s}=a,o=e.exports.useRef();o.current==null&&(o.current=l({window:s}));let t=o.current,[r,c]=e.exports.useState({action:t.action,location:t.location});return e.exports.useLayoutEffect(()=>t.listen(c),[t]),e.exports.createElement(u,{basename:n,children:i,location:r.location,navigationType:r.action,navigator:t})}export{h as H};
