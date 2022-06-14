import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const IndexPage = (): JSX.Element => {
  return (
    <>
      <div>
        <Link to={'pc'}>PC</Link>
        <Link to={'mobile'}>Mobile</Link>
      </div>

      <Outlet />
    </>
  )
}

export default IndexPage
