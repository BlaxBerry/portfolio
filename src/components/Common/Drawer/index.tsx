import React, { useState } from 'react'
import ReactCountryFlag from 'react-country-flag'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Toolbar from '@material-ui/core/Toolbar'
import { List } from '../'
import { PROJECT_GITHUB_REPOSITORY } from '../../../config'
import Typography from '@material-ui/core/Typography'

export interface DrwerListItemType {
  id: string
  name: string
  icon?: JSX.Element
  onClick?: () => void
  collapse?: Array<DrwerListCollapseItemType> | null
}

export interface DrwerListCollapseItemType {
  id: string
  name: string
  icon?: JSX.Element
  onClick: () => void
}

interface CustomDrawerProps {
  direction: 'top' | 'bottom' | 'right' | 'left'
}

const CustomDrawer = ({ direction }: CustomDrawerProps) => {
  const [isDrawerShow, setIsDrawerShow] = useState<boolean>(false)

  const drawerListSetting: Array<DrwerListItemType> = [
    {
      id: 'xxx',
      name: 'xxx',
      onClick() {
        console.log('xxx')
      },
    },
    {
      id: 'drawer-translation',
      name: 'Translation',
      collapse: [
        {
          id: 'drawer-translation-cn',
          name: 'cn',
          icon: <ReactCountryFlag countryCode="CN" />,
          onClick() {
            console.log('drawer-translation-cn')
          },
        },
        {
          id: 'drawer-translation-en',
          name: 'en',
          icon: <ReactCountryFlag countryCode="US" />,
          onClick() {
            console.log('drawer-translation-en')
          },
        },
        {
          id: 'drawer-translation-ja',
          name: 'ja',
          icon: <ReactCountryFlag countryCode="JP" />,
          onClick() {
            console.log('drawer-translation-jp')
          },
        },
      ],
    },
  ]

  const drawerListExtraInfo: Array<DrwerListItemType> = [
    {
      id: 'drawer-github-profile',
      name: 'Github Profile',
      onClick() {
        window.open(PROJECT_GITHUB_REPOSITORY, '_blank')
      },
    },
    {
      id: 'drawer-about-this',
      name: 'About this',
      onClick() {
        console.log('about this')
      },
    },
  ]

  return (
    <>
      <IconButton aria-label="menu" onClick={() => setIsDrawerShow(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor={direction}
        open={isDrawerShow}
        onClose={() => setIsDrawerShow(false)}
      >
        <Container maxWidth="lg">
          <Toolbar variant="dense">
            <Typography variant="inherit" className="front-700">
              Menu
            </Typography>
          </Toolbar>

          <Divider />
          {/* 设定相关操作项 */}
          <List list={drawerListSetting} />
          <Divider />
          {/* 补充内容（路由、链接、版本信息等） */}
          <List list={drawerListExtraInfo} />
        </Container>
      </Drawer>
    </>
  )
}

export default CustomDrawer
