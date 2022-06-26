import React, { useEffect, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import { WarpFullScreen, Title } from '../../../components/Common'
import { SkillItemType } from '../../../components/Pages/Skills/SkillsList'
import {
  DetailSkillRelations,
  DetailSkillDescription,
  DeatilSkillEmpty,
} from '../../../components/Pages/Detail/Skill'
import { ALL_SKILLS } from '../../../mock'

const IndexPage = (): JSX.Element => {
  const navigate = useNavigate()
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
    if (!currentSkill) navigate('/404', { replace: true })
  }, [currentSkill, navigate])

  // 筛选获取关联的 skills
  const RELAIONS_SKILLS = useMemo(() => {
    return currentSkill?.extraInfo?.relations?.map((x) =>
      ALL_SKILLS?.find((y) => y.id === x)
    )
  }, [currentSkill])

  return (
    <WarpFullScreen>
      {/* TODO: 顶间距占位 */}
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />

      {/* title */}
      <Title title={currentSkill?.name} />

      {/* TODO: 间距 */}
      <Divider />
      <br />

      {/* 若 perpering(准备中)则展示 Empty 空内容提醒 */}
      {currentSkill?.extraInfo?.preparing && <DeatilSkillEmpty />}

      {/* 若 not perperings 则展示 kill 内容 */}
      {!currentSkill?.extraInfo?.preparing && (
        <React.Fragment>
          {/* TODO: 1. 关联技术 list */}
          {RELAIONS_SKILLS && <DetailSkillRelations list={RELAIONS_SKILLS} />}

          {/* TODO: 2. 技术详情 */}
          <DetailSkillDescription currentSkill={currentSkill} />

          {/* TODO: 3. 关联作品 slider list */}
          {/* <h2>Relations Works</h2>*/}
        </React.Fragment>
      )}

      {/* TODO: 顶间距占位 */}
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />
    </WarpFullScreen>
  )
}

export default IndexPage
