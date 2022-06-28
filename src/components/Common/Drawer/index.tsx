import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import TranslateIcon from '@material-ui/icons/Translate'
import GitHubIcon from '@material-ui/icons/GitHub'
// import InfoIcon from '@material-ui/icons/Info'
import { List } from '../'
import LanguageOptions from '../ToolGroups/LanguageOptions'
import getNavItems from '../../Routes/NavItems'
import { PROJECT_GITHUB_REPOSITORY } from '../../../config'

export interface DrwerListItemType {
  id: string
  name: string
  icon?: JSX.Element
  onClick?: () => void
  collapse?: Array<DrwerListCollapseItemType> | null
  routePathname?: string // 针对路由导航链接选项
}

export interface DrwerListCollapseItemType {
  id: string
  name: string
  icon?: JSX.Element
  onClick?: () => void
  langID?: string
}

interface CustomDrawerProps {
  direction: 'top' | 'bottom' | 'right' | 'left'
}

const CustomDrawer = ({ direction }: CustomDrawerProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [isDrawerShow, setIsDrawerShow] = useState<boolean>(false)

  // 路由页面导航链接
  const { navigationItems } = getNavItems()
  const LIST_ROUTES_PAGES: Array<DrwerListItemType> = navigationItems.map(
    (item) => ({
      id: item.title.toLowerCase(),
      name: item.title,
      icon: item.icon,
      onClick: () => {
        navigate(item.to)
        setIsDrawerShow(false)
      },
      routePathname: item.to,
    })
  )

  // 语言切换选项列表
  const { translationOptionItems } = LanguageOptions()
  const LIST_SETTING_TOOLS: Array<DrwerListItemType> = [
    // {
    //   id: 'xxx',
    //   name: 'xxx',
    //   onClick: () => {
    //     console.log('xxx')
    //   },
    // },
    {
      id: 'drawer-translation',
      name: t('components.header.tools.translations'),
      icon: <TranslateIcon />,
      collapse: translationOptionItems,
    },
  ]

  const LIST_EXTRA_INFO: Array<DrwerListItemType> = [
    {
      id: 'drawer-github-profile',
      name: t('components.header.tools.github-repository'),
      icon: <GitHubIcon />,
      onClick: () => window.open(PROJECT_GITHUB_REPOSITORY, '_blank'),
    },
    // {
    //   id: 'drawer-about-this',
    //   name: 'About This',
    //   icon: <InfoIcon />,
    //   onClick: () =>
    //     // TODO: navigate to /about page
    //     window.open(
    //       'https://github.com/BlaxBerry/portfolio/blob/main/README.md',
    //       '_blank'
    //     ),
    // },
  ]

  return (
    <>
      {/* 抽屉开关菜单按钮 */}
      <IconButton
        className="my-header-drawer-toggle-btn"
        aria-label="menu"
        onClick={() => setIsDrawerShow(true)}
      >
        <MenuIcon />
      </IconButton>

      {/* 抽屉内容 */}
      <Drawer
        anchor={direction}
        open={isDrawerShow}
        onClose={() => setIsDrawerShow(false)}
        // materialui Drawer 利用了遮罩层
      >
        <Container maxWidth="lg">
          <Toolbar variant="dense">
            <Typography variant="inherit" className="front-700">
              {'Portfolio v 1.0.0'}
            </Typography>
          </Toolbar>
          <Divider />
          {/* 路由页面导航链接 */}
          <List list={LIST_ROUTES_PAGES} style={{ width: '60vw' }} />
          <Divider />
          {/* 设定相关操作项 */}
          <List list={LIST_SETTING_TOOLS} style={{ width: '60vw' }} />
          <Divider />
          {/* 补充内容（链接、版本信息等） */}
          <List list={LIST_EXTRA_INFO} style={{ width: '60vw' }} />
        </Container>
      </Drawer>
    </>
  )
}

export default CustomDrawer
