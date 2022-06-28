import React from 'react'
import Layout from './components/Layout'
import RouterView from './components/Routes/RouterView'

export default function App() {
  return (
    <React.Fragment>
      <Layout>
        {/* 路由页面内容 */}
        <RouterView />
      </Layout>
    </React.Fragment>
  )
}
