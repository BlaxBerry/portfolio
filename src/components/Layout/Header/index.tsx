import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import Avatar from '@material-ui/core/Avatar'
import logo from '../../../assets/logo/logo.jpeg'
import NavBarPC from '../NavBar/NavbarPC'
import { useWindowSize } from '../../../hooks/index'
import { NavbarTools } from '../../Common'
import Container from '@material-ui/core/Container'

const Header = (): JSX.Element => {
  const { isPC, isMobile } = useWindowSize()

  const renderLayout = (): JSX.Element => {
    return (
      <Toolbar variant="dense">
        {/* 左侧 logo */}
        <Avatar
          src={logo}
          alt="logo"
          style={{
            width: 30,
            height: 30,
            marginRight: 10,
          }}
        />

        {/* PC 布局 左侧路由导航按钮 */}
        {isPC && <NavBarPC />}

        {/* 右侧 工具按钮组 */}
        <div style={{ flexGrow: 1 }} />
        <NavbarTools />

        {/* TODO: mobile 右侧菜单按钮 */}
        {isMobile && (
          <IconButton aria-label="menu">
            <MenuIcon />
          </IconButton>
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
