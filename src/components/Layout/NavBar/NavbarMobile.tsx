import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { navigationItems } from '../../Routes/RouterView'
import Toolbar from '@material-ui/core/Toolbar'

const NavBarMobile = (): JSX.Element => {
  const navigate = useNavigate()

  const [selected, setSelected] = useState<string>(navigationItems[0].to) // pathname

  const handleChange = (event: unknown, pathname: string) => {
    setSelected(pathname)
    navigate(pathname)
  }
  return (
    <>
      {/* 占位栏 高度等于底部导航栏 */}
      <Toolbar />
      {/* 底部导航栏 */}
      <BottomNavigation
        value={selected}
        onChange={handleChange}
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
        }}
      >
        {navigationItems.map((item) => (
          <BottomNavigationAction
            key={item.to}
            label={item.title}
            value={item.to}
            icon={item.icon}
          />
        ))}
      </BottomNavigation>
    </>
  )
}

export default NavBarMobile
