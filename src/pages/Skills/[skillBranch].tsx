import React from 'react'
import { useLocation } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import SkillsList from '../../components/Pages/Skills/SkillsList'
import SkillsChart from '../../components/Pages/Skills/SkillsChart'
import {
  SKILLS_FRONT,
  SKILLS_BACK,
  SKILLS_OTHERS,
  SKILLS_DESIGNS,
} from '../../mock'

// skills 的子路由组件 展示位置在 tab 下方
const IndexPage = (): JSX.Element => {
  const location = useLocation()
  const skillBranch = location.pathname.slice(
    location.pathname.lastIndexOf('/') + 1
  )

  // 筛选展示的 skills
  const FRONTS = SKILLS_FRONT.filter((item) => item.extraInfo.show)
  const BACKS = SKILLS_BACK.filter((item) => item.extraInfo.show)
  const OTHERS = SKILLS_OTHERS.filter((item) => item.extraInfo.show)
  const DESIGNS = SKILLS_DESIGNS.filter((item) => item.extraInfo.show)

  return (
    <>
      <Grid container spacing={3}>
        {/* 1. chart (仅在 lg 以后才显示) */}
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Hidden smDown>
          <Grid item xs={5}>
            <SkillsChart />
          </Grid>
        </Hidden>
        {/* 2. svg list */}
        <Grid item xs={12} sm={12} md={7}>
          {/* fornt */}
          {skillBranch === 'front' && <SkillsList list={FRONTS} />}
          {/* back */}
          {skillBranch === 'back' && <SkillsList list={BACKS} />}
          {/* others */}
          {skillBranch === 'others' && <SkillsList list={OTHERS} />}
          {/* design */}
          {skillBranch === 'design' && <SkillsList list={DESIGNS} />}
        </Grid>
      </Grid>
    </>
  )
}

export default IndexPage
