import React from 'react'
import { WarpFullScreen, WrapContainer } from '../components/Common'

const IndexPage = (): JSX.Element => {
  return (
    <div>
      <WarpFullScreen>top page</WarpFullScreen>

      <WrapContainer>1</WrapContainer>

      <WarpFullScreen>2</WarpFullScreen>

      <WrapContainer>3</WrapContainer>
    </div>
  )
}

export default IndexPage
