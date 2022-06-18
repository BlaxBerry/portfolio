import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import Tooltip from '@material-ui/core/Tooltip'
import GitHubIcon from '@material-ui/icons/GitHub'
import SunIcon from '@material-ui/icons/WbSunnyOutlined'
// import MoonIcon from '@material-ui/icons/Brightness3Outlined'
import TranslateIcon from '@material-ui/icons/Translate'
import Menu, { CustomMenuProps } from '../../Menu'
import { PROJECT_GITHUB_REPOSITORY } from '../../../../config'

export interface ToolButtonItemType {
  id: string
  name: string
  icon: JSX.Element
  tooltip: string
  href?: string
  onClick?: () => void
  menus?: Array<ToolMenuItemType>
}

export interface ToolMenuItemType {
  id: string
  icon?: JSX.Element
  name: string
  onClick?: () => void
}

const NavBarTools = (): JSX.Element => {
  const toolIconButtons: Array<ToolButtonItemType> = [
    {
      id: 'tool-github',
      name: '',
      tooltip: 'GitHub Repository',
      href: PROJECT_GITHUB_REPOSITORY,
      icon: <GitHubIcon />,
      onClick() {
        window.open(PROJECT_GITHUB_REPOSITORY, '_blank')
      },
    },
    {
      id: 'tool-theme',
      name: '',
      tooltip: 'Turn off the light/dark',
      icon: <SunIcon />,
      onClick() {
        console.log('Turn off the light/dark')
      },
    },
    {
      id: 'tool-translation',
      name: '',
      tooltip: '',
      icon: <TranslateIcon />,
      menus: [
        {
          id: 'tool-translation-cn',
          icon: <ReactCountryFlag countryCode="CN" />,
          name: 'CN',
          onClick() {
            console.log('cn')
          },
        },
        {
          id: 'tool-translation-en',
          icon: <ReactCountryFlag countryCode="US" />,
          name: ' EN',
          onClick() {
            console.log('en')
          },
        },
        {
          id: 'tool-translation-ja',
          icon: <ReactCountryFlag countryCode="JP" />,
          name: 'JA',
          onClick() {
            console.log('ja')
          },
        },
      ],
    },
  ]

  // 解决 material-ui tooltip 需要访问 DOM 节点但 React 函数组件定义的 Menu 没有的问题
  const MenuForwardRef = React.forwardRef(
    (props: CustomMenuProps, ref: React.LegacyRef<HTMLSpanElement>) => {
      return (
        <span {...props} ref={ref}>
          <Menu item={props.item} />
        </span>
      )
    }
  )
  // 解决 MenuForwardRef 组件 “Component definition is missing display name” 问题
  MenuForwardRef.displayName = 'MenuForwardRef'

  return (
    <div>
      {toolIconButtons?.map((item: ToolButtonItemType) => (
        <React.Fragment key={item.id}>
          <Tooltip title={item.tooltip}>
            <MenuForwardRef item={item} />
          </Tooltip>
        </React.Fragment>
      ))}
    </div>
  )
}

export default NavBarTools
