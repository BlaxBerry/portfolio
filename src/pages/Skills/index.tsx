import React from 'react'
import { Outlet } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import { WarpFullScreen, Title, Tab } from '../../components/Common'
import { TabItemsType } from '../../components/Common/Tab'
import { skillsChildrenRoute } from '../../components/Routes/RouterView'

const IndexPage = (): JSX.Element => {
  const tabItems: TabItemsType[] = skillsChildrenRoute.map((item) => ({
    name: item, // TODO: i18n
    to: item,
  }))

  return (
    <WarpFullScreen>
      {/* TODO: 顶间距占位 */}
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />

      {/* title */}
      {/* <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}> */}
      <Title title={'スキルについて'} />
      {/* </AnimationOnScroll> */}

      {/* content */}
      {/* tab 选项 */}
      <Tab tabItems={tabItems} />
      {/* 子路由展示 */}
      <Outlet />
    </WarpFullScreen>
  )
}

export default IndexPage
