import React from 'react'
import { WarpFullScreen, WrapTransparent } from '../components/Common'

const IndexPage = (): JSX.Element => {
  return (
    <div>
      <WrapTransparent>toppage image</WrapTransparent>

      <WarpFullScreen>about</WarpFullScreen>

      <WrapTransparent hasMask>skills</WrapTransparent>

      <WarpFullScreen>works</WarpFullScreen>
    </div>
  )
}

export default IndexPage
