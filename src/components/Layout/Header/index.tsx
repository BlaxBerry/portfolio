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
        {/* PC 左侧 logo */}
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

        {/* mobile 左侧抽屉菜单按钮开关 */}
        {isMobile && <Drawer direction={'left'} />}
        {/* mobile 左侧 title */}
        {isMobile && <>mobile</>}

        {/* PC 左侧路由导航按钮 */}
        {isPC && <NavBarPC />}
        {/* PC 右侧工具按钮组 */}
        {isPC && (
          <React.Fragment>
            {/* 占位间隔元素 */}
            <div style={{ flexGrow: 1 }} />
            {/* 工具按钮组 */}
            <NavbarTools />
          </React.Fragment>
        )}
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
        {/* PC 布局 Heade 内容 */}
        {isPC && <Container maxWidth="lg">{renderLayout()}</Container>}

        {/* Mobile 布局 Heade 内容 */}
        {isMobile && renderLayout()}
      </AppBar>

      {/* 占位元素 高度等于顶部应用栏 */}
      <Toolbar variant="dense" />
    </>
  )
}

export default Header
