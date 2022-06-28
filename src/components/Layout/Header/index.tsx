import React from 'react'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import NavBarPC from '../NavBar'
import { Drawer } from '../../Common'
import { useWindowSize } from '../../../hooks/index'

const Header = (): JSX.Element => {
  const { isPC, isMobile } = useWindowSize()

  return (
    <AppBar className="my-header" color="inherit">
      <Container maxWidth="lg">
        <Toolbar className="my-header-navbar" variant="dense">
          {/* PC 布局 */}
          {isPC && <NavBarPC />}

          {/* Mobile 布局 */}
          {isMobile && (
            <React.Fragment>
              {/* 1. 左侧抽屉菜单按钮开关 */}
              <Drawer direction={'left'} />
              {/* 2. 居中标题 */}
              <Typography className="my-header-navbar-title" variant="inherit">
                {/* TODO: i18next */}
                {"Chen's Portfolio"}
              </Typography>
            </React.Fragment>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
