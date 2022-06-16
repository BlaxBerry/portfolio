import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import GitHubIcon from '@material-ui/icons/GitHub'
import SunIcon from '@material-ui/icons/WbSunnyOutlined'
// import MoonIcon from '@material-ui/icons/Brightness3Outlined'
import IconButton from '@material-ui/core/IconButton'
import { useWindowSize } from '../../../hooks'

interface ToolButtonItem {
  title: string
  href?: string
  icon: JSX.Element
  onclick?: () => void
}

const NavBarPC = (): JSX.Element => {
  const { isPC, isMobile } = useWindowSize()

  const toolIconButtons: Array<ToolButtonItem> = [
    {
      title: 'GitHub repository',
      href: '',
      icon: <GitHubIcon />,
      // TODO:
      onclick: () => {
        console.log('GitHub repository')
      },
    },
    {
      title: 'Turn off the light/dark',
      icon: <SunIcon />,
      // TODO: transform title & icon
      onclick: () => {
        console.log('Turn off the light/dark')
      },
    },
  ]

  const renderPCLayout = (): JSX.Element => {
    return (
      <>
        {toolIconButtons?.map((item: ToolButtonItem) => (
          <Tooltip title={item.title} key={item.title}>
            <IconButton aria-label={item.title} onClick={item.onclick}>
              {item.icon}
            </IconButton>
          </Tooltip>
        ))}
      </>
    )
  }

  const renderMobileLayout = (): JSX.Element => {
    return (
      <>
        {toolIconButtons?.map((item: ToolButtonItem) => (
          <IconButton
            key={item.title}
            aria-label={item.title}
            onClick={item.onclick}
          >
            {item.icon}
          </IconButton>
        ))}
      </>
    )
  }

  return (
    <div>
      {isPC && renderPCLayout()}
      {isMobile && renderMobileLayout()}
    </div>
  )
}

export default NavBarPC
