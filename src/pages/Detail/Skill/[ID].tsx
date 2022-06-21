import React, { useEffect, useMemo } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import { useLocation, useNavigate } from 'react-router-dom'
import { WarpFullScreen } from '../../../components/Common'
import { SkillItemType } from '../../../components/Pages/Skills/SkillsList'
import { ALL_SKILLS } from '../../../mock'

const IndexPage = (): JSX.Element => {
  const naviagte = useNavigate()
  const location = useLocation()
  // const state = location.state as { item: SkillItemType }

  // 浏览器地址栏URL中获取 skill ID
  const skillID = location.pathname.slice(
    location.pathname.lastIndexOf('/') + 1
  )

  // 根据 skill ID 查询对应 skill
  const currentSkill = useMemo(() => {
    return ALL_SKILLS.find((item: SkillItemType) => item.id === skillID)
  }, [skillID])

  // 若没有查到对应 skill 跳转到 404
  useEffect(() => {
    if (!currentSkill) naviagte('/404', { replace: true })
  }, [currentSkill, naviagte])

  return (
    <WarpFullScreen>
      {/* TODO: 顶间距占位 */}
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />

      {/* TODO: */}
      <h1>SKILL NAME</h1>
      <h2>{currentSkill?.name}</h2>
    </WarpFullScreen>
  )
}

export default IndexPage
