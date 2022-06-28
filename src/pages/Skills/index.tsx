import React from 'react'
import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Toolbar from '@material-ui/core/Toolbar'
import { WarpFullScreen, Title, Tab } from '../../components/Common'
import { TabItemsType } from '../../components/Common/Tab'
import { skillsChildrenRoute } from '../../components/Routes/RouterView'

const IndexPage = (): JSX.Element => {
  const { t } = useTranslation()

  const tabItems: TabItemsType[] = skillsChildrenRoute.map((item) => ({
    name: t(`pages.skills.tabs.${item}`),
    to: item,
  }))

  return (
    <WarpFullScreen>
      {/* TODO: 顶间距占位 */}
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />

      {/* title */}
      <Title title={t('pages.skills.title')} />

      {/* content */}
      {/* tab 选项 */}
      <Tab tabItems={tabItems} />
      {/* 子路由展示 */}
      <Outlet />
    </WarpFullScreen>
  )
}

export default IndexPage
