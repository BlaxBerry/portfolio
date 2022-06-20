import React from 'react'
import { WarpFullScreen, WrapTransparent } from '../components/Common'
import HomeWelcome from '../components/Pages/Home/HomeWelcome'
import HomeAboutBrief from '../components/Pages/Home/HomeAboutBrief'
import HomeSkillsBrief from '../components/Pages/Home/HomeSkillsBrief'
import HomeWorksBrief from '../components/Pages/Home/HomeWorksBrief'

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
