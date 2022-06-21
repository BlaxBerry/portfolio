import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { skillsChildrenRoute } from '../../components/Routes/RouterView'
import SkillsList from '../../components/Pages/Skills/SkillsList'
import { SKILLS_FRONT, SKILLS_BACK, SKILLS_OTHERS } from '../../mock'

// skills 的子路由组件 展示位置在 tab 下方
const IndexPage = (): JSX.Element => {
  const naviagte = useNavigate()
  const location = useLocation()
  const skillBranch = location.pathname.slice(
    location.pathname.lastIndexOf('/') + 1
  )

  // 为经过 Tab 而是直接访问该页面的场合
  useEffect(() => {
    if (!skillsChildrenRoute.includes(skillBranch)) {
      naviagte(`/skills/${skillsChildrenRoute[0]}`, { replace: true })
    }
  }, [skillBranch, naviagte])

  return (
    <>
      {/* TODO: 顶间距 */}
      {/* <Toolbar variant="dense" /> */}
      <br />

      {/* fornt */}
      {skillBranch === 'front' && <SkillsList list={SKILLS_FRONT} />}
      {/* back */}
      {skillBranch === 'back' && <SkillsList list={SKILLS_BACK} />}
      {/* others */}
      {skillBranch === 'others' && <SkillsList list={SKILLS_OTHERS} />}
    </>
  )
}

export default IndexPage
