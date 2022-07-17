import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from 'react-router-dom'
import './config/i18next' // i18next
import 'animate.css/animate.min.css' // react-animation-on-scroll
import './styles/index.scss'

import { ThemeSwitcherProvider } from 'react-css-theme-switcher'

// 样式文件来自上线后 docs/theme, 开发时只需修改 public/theme 即可
const themes = {
  dark: `${import.meta.env.BASE_URL}theme/dark-theme.css`,
  light: `${import.meta.env.BASE_URL}theme/light-theme.css`,
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.Fragment>
    {/* 使用 HashRouter 使路径变为 /#/:pathname 来解决 github page 陆路由跳转时 404 问题  */}
    <HashRouter>
      <ThemeSwitcherProvider defaultTheme="light" themeMap={themes}>
        <App />
      </ThemeSwitcherProvider>
    </HashRouter>
  </React.Fragment>
)
