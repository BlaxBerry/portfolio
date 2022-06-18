import React from 'react'
import { useNavigate } from 'react-router-dom'
import { navigationItems, NavigationItemType } from '../../Routes/RouterView'
import Button from '@material-ui/core/Button'

const NavBarPC = (): JSX.Element => {
  const navigate = useNavigate()

  const onClick = (pathname: string) => {
    navigate(pathname)
  }

  return (
    <div>
      {navigationItems?.map((item: NavigationItemType) => (
        <Button
          key={item.to}
          className="front-700"
          style={{ textTransform: 'unset' }} // tuen off material-ui button text uppercase
          onClick={() => onClick(item.to)}
        >
          {item.title}
        </Button>
      ))}
    </div>
  )
}

export default NavBarPC
