import React, { useEffect, useMemo } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import { useLocation, useNavigate } from 'react-router-dom'
import { WarpFullScreen } from '../../../components/Common'
import SkillsList, {
  SkillItemType,
} from '../../../components/Pages/Skills/SkillsList'
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

  // 筛选获取关联的 skills
  const RELAIONS_SKILLS = currentSkill?.extraInfo?.relations?.map((x) =>
    ALL_SKILLS?.filter((y) => !y.extraInfo.show).find((z) => z.id === x)
  )

  return (
    <WarpFullScreen>
      {/* TODO: 顶间距占位 */}
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />
      {/* <Toolbar variant="dense" /> */}

      <div className="text-align-center">
        {/* TODO: title + svg */}
        <h1>{currentSkill?.name}</h1>

        {/* 不通过点击 skill img 而是直接从访问该页面时，若 is perpering(准备中)则不展示内容 */}
        {currentSkill?.extraInfo?.preparing && (
          <>
            <h2 className="front-grey">
              Content is Preparing, will be published ...
            </h2>
            <button>go SKills check more </button>
          </>
        )}

        {/* 若 not perperings 则展示 kill 内容 */}
        {!currentSkill?.extraInfo?.preparing && (
          <>
            {/* TODO: 1. description */}
            {/* <h2>Description</h2> */}

            {/* TODO: 2. Relations Skills */}
            {RELAIONS_SKILLS && (
              <>
                <h2>Relations Skills I Have Used : </h2>
                <SkillsList list={RELAIONS_SKILLS as SkillItemType[]} />
              </>
            )}

            {/* TODO: 3. Relations Works */}
            {/* <h2>Relations Works</h2>
            {currentSkill?.extraInfo?.} */}
          </>
        )}
      </div>
    </WarpFullScreen>
  )
}

export default IndexPage
