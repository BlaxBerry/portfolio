import React from 'react'
import { WarpFullScreen, WrapTransparent } from '../components/Common'
import HomeWelcome from '../components/Pages/Home/HomeWelcome'
import HomeAboutSiteBrief from '../components/Pages/Home/HomeAboutSiteBrief'
import HomeAboutMyselfBrief from '../components/Pages/Home/HomeAboutMyselfBrief'
import HomeSkillsBrief from '../components/Pages/Home/HomeSkillsBrief'
import HomeWorksBrief from '../components/Pages/Home/HomeWorksBrief'

const IndexPage = (): JSX.Element => {
  return (
    <div>
      {/* 1. welcome */}
      <WrapTransparent>
        <HomeWelcome />
      </WrapTransparent>

      {/* 2. about this site brief */}
      <WarpFullScreen>
        <HomeAboutSiteBrief />
      </WarpFullScreen>

      {/* 3. about myself brief  */}
      <WrapTransparent>
        <HomeAboutMyselfBrief />
      </WrapTransparent>

      {/* 4. skills brief  */}
      <WarpFullScreen>
        <HomeSkillsBrief />
      </WarpFullScreen>

      {/* 5. works brief  */}
      <WrapTransparent>
        <HomeWorksBrief />
      </WrapTransparent>
    </div>
  )
}

export default IndexPage
