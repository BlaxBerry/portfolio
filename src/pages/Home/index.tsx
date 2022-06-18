import React from 'react'
import { WarpFullScreen, WrapTransparent } from '../../components/Common'
import HomeWelcome from './HomeWelcome'

const IndexPage = (): JSX.Element => {
  return (
    <div>
      <WrapTransparent>
        <HomeWelcome />
      </WrapTransparent>

      <WarpFullScreen>about</WarpFullScreen>

      <WrapTransparent hasMask>skills</WrapTransparent>

      <WarpFullScreen>works</WarpFullScreen>
    </div>
  )
}

export default IndexPage
