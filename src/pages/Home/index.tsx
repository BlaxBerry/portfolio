import React from 'react'
import { WarpFullScreen, WrapTransparent } from '../../components/Common'
import HomeWelcome from './HomeWelcome'
import HomeAboutBrief from './HomeAboutBrief'
import HomeSkillsBrief from './HomeSkillsBrief'
import HomeWorksBrief from './HomeWorksBrief'

const IndexPage = (): JSX.Element => {
  return (
    <div>
      {/* 1. welcome */}
      <WrapTransparent>
        <HomeWelcome />
      </WrapTransparent>

      {/* 2. about brief */}
      <WarpFullScreen>
        <HomeAboutBrief />
      </WarpFullScreen>

      {/* 3. skills brief  */}
      <WrapTransparent>
        <HomeSkillsBrief />
      </WrapTransparent>

      {/* 4. works brief  */}
      <WarpFullScreen>
        <HomeWorksBrief />
      </WarpFullScreen>
    </div>
  )
}

export default IndexPage
