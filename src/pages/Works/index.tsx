import React from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import { Title, WrapTransparent, Tab } from '../../components/Common'
import { TabItemsType } from '../../components/Common/Tab'
import { worksChildrenRoute } from '../../components/Routes/RouterView'

const IndexPage = (): JSX.Element => {
  const { t } = useTranslation()

  const tabItems: TabItemsType[] = worksChildrenRoute.map((item) => ({
    name: t(`pages.works.tabs.${item}`),
    to: item,
  }))

  return (
    <WrapTransparent>
      {/* TODO: 顶间距占位 */}
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />

      {/* title */}
      <Title title={t('pages.works.title')} />

      {/* tab 选项 */}
      <Tab fatherURL="works" tabItems={tabItems} />

      {/* TODO: 间距 */}
      <Toolbar variant="dense" />

      {/* 子路由展示 */}
      <Outlet />

      {/* TODO: 间距 */}
      <Toolbar variant="dense" />
    </WrapTransparent>
  )
}

export default IndexPage
