import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { NavbarTools } from '../../Common'
import getNavItems, { NavigationItemType } from '../../Routes/NavItems'
import logo from '../../../assets/logo/logo.jpeg'

const NavBarPC = (): JSX.Element => {
  const navigate = useNavigate()
  const location = useLocation()

  // pathname
  const [selectedNav, setSelectedNav] = useState<string | null>(null)

  const handleChange = (event: unknown, pathname: string) => {
    navigate(pathname)
    setTimeout(() => {
      setSelectedNav(pathname)
    }, 200)
  }

  // 根据路由 url pathname 选中路由导航链接
  const { navigationItems } = getNavItems()
  useEffect(() => {
    const currentRoute = '/' + location.pathname.split('/')[1]
    if (navigationItems.find(({ to }) => to === currentRoute)) {
      setSelectedNav(currentRoute)
    }
  }, [location, navigationItems])

  return (
    <React.Fragment>
      {/* 1. 左侧 logo */}
      <IconButton
        className={'my-header-navbar-logo'}
        aria-label="menu"
        onClick={() => navigate('/home')}
      >
        <Avatar src={logo} alt="logo" />
      </IconButton>
      {/* 2. route 页面导航按钮 */}
      <BottomNavigation
        className="my-header-navbar-buttons"
        value={selectedNav}
        onChange={handleChange}
      >
        {navigationItems?.map((item: NavigationItemType) => (
          <BottomNavigationAction
            key={item.to}
            value={item.to}
            label={item.title}
            icon={item.icon}
          />
        ))}
      </BottomNavigation>

      {/* 3. 占位间隔元素 */}
      <div style={{ flexGrow: 1 }} />
      {/* 4. 工具按钮组 */}
      <NavbarTools />
    </React.Fragment>
  )
}

export default NavBarPC
