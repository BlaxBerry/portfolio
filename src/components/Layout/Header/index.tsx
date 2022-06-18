import React from 'react'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'
import NavBarPC from '../NavBar/NavbarPC'
import { NavbarTools, Drawer } from '../../Common'
import logo from '../../../assets/logo/logo.jpeg'
import { useWindowSize } from '../../../hooks/index'

const Header = (): JSX.Element => {
  const { isPC, isMobile } = useWindowSize()

  const renderLayout = (): JSX.Element => {
    return (
      <Toolbar variant="dense" style={{ padding: 0 }}>
        {/* 左侧 logo */}
        {isPC && (
          <Avatar
            src={logo}
            alt="logo"
            style={{
              width: 30,
              height: 30,
              marginRight: 10,
            }}
          />
        )}

        {/* mobile 右侧菜单按钮上拉抽屉开关 */}
        {isMobile && <Drawer direction={'left'} />}

        {/* PC 布局 左侧路由导航按钮 */}
        {isPC && <NavBarPC />}

        {/* 右侧 工具按钮组 */}
        <div style={{ flexGrow: 1 }} />
        <NavbarTools />
      </Toolbar>
    )
  }

  return (
    <>
      <AppBar
        color="inherit"
        // TODO:
        style={{
          backdropFilter: 'blur(20px)',
          // -webkit-backdrop-filter: blur(10px)  // safari
          backgroundColor: 'rgba(255,255,255,0.72)',
        }}
      >
        {/* PC layout content  */}
        {isPC && <Container maxWidth="lg">{renderLayout()}</Container>}

        {/* Mobile layout content  */}
        {isMobile && renderLayout()}
      </AppBar>
      {/* 占位栏 高度等于顶部应用栏 */}
      <Toolbar variant="dense" />
    </>
  )
}

export default Header
