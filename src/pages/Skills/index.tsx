import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'

const IndexPage = (): JSX.Element => {
  return (
    <>
      {/* TODO: 顶间距占位 */}
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />

      <div>
        <Link to={'front'}>Front</Link>
        <Link to={'back'}>Back</Link>
      </div>

      <Outlet />
    </>
  )
}

export default IndexPage
