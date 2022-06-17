import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import Tooltip from '@material-ui/core/Tooltip'
import GitHubIcon from '@material-ui/icons/GitHub'
import SunIcon from '@material-ui/icons/WbSunnyOutlined'
// import MoonIcon from '@material-ui/icons/Brightness3Outlined'
import TranslateIcon from '@material-ui/icons/Translate'
import { Menu } from '../../'
import { useWindowSize } from '../../../../hooks'
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
  const { isPC, isMobile } = useWindowSize()

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
      tooltip: 'Translation',
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

  return (
    <div>
      {toolIconButtons?.map((item: ToolButtonItemType) => (
        <React.Fragment key={item.id}>
          {/* PC 工具按钮组布局 */}
          {isPC && (
            <Tooltip title={item.tooltip}>
              <React.Fragment>
                <Menu item={item} />
              </React.Fragment>
            </Tooltip>
          )}

          {/* Mobile 工具按钮组布局 */}
          {isMobile && <Menu item={item} />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default NavBarTools
