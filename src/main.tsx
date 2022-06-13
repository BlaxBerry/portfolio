import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 使用 HashRouter 使路径变为 /#/:pathname 来解决 github page 陆路由跳转时 404 问题  */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
