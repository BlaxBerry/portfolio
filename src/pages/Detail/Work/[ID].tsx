import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import base64 from 'base-64'
import Toolbar from '@material-ui/core/Toolbar'
import { Title, WarpFullScreen } from '../../../components/Common'
import { WorksItemType } from '../../../components/Pages/Works/WorksList'
import SkillsList, {
  SkillItemType,
} from '../../../components/Pages/Skills/SkillsList'
import { WORKS_ALL, ALL_SKILLS } from '../../../mock'
import { useWindowSize } from '../../../hooks'
import {
  DetailWorkDescription,
  DetailWorkImages,
} from '../../../components/Pages/Detail/Work'

const IndexPage = (): JSX.Element => {
  const {
    i18n: { language },
  } = useTranslation()
  const location = useLocation()
  const { isPC } = useWindowSize()

  // 浏览器地址栏URL中获取 skill ID
  const workID = location.pathname.slice(location.pathname.lastIndexOf('/') + 1)

  // 根据 work ID 查询对应 work
  const currentWork = useMemo((): WorksItemType | undefined => {
    const decodeID = base64.decode(workID).split(':')[1]
    return WORKS_ALL.find((item) => item.id === decodeID)
  }, [workID])

  const RELAIONS_SKILLS = useMemo(() => {
    return currentWork?.skillsTags?.map((x) =>
      ALL_SKILLS?.find((y) => y.id === x)
    )
  }, [currentWork?.skillsTags])

  console.log(currentWork)

  return (
    <WarpFullScreen>
      {/* TODO: 顶间距占位 */}
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />

      {/* title */}
      <Title title={currentWork?.title?.[language]} />

      {/* skills list */}
      <SkillsList
        list={RELAIONS_SKILLS as SkillItemType[]}
        justifyContent={isPC ? 'center' : 'flex-start'}
        xs={2}
        sm={2}
        md={1}
        lg={1}
        xl={1}
      />

      {/* description */}
      <DetailWorkDescription />

      {/* images */}
      <DetailWorkImages list={currentWork?.images as string[]} />
    </WarpFullScreen>
  )
}

export default IndexPage
