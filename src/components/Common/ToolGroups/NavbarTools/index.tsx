import React, { useState } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'
import GitHubIcon from '@material-ui/icons/GitHub'
// import SunIcon from '@material-ui/icons/WbSunnyOutlined'
// import MoonIcon from '@material-ui/icons/Brightness3Outlined'
import TranslateIcon from '@material-ui/icons/Translate'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Menu from '../../Menu'
import { PROJECT_GITHUB_REPOSITORY } from '../../../../config'
import LanguageOptions from '../LanguageOptions'

export interface ToolButtonItemType {
  id: string
  name: string
  icon: JSX.Element
  tooltip: string
  href?: string
  onClick?: () => void
  menus?: Array<ToolMenuListItemType>
}

export interface ToolMenuListItemType {
  id: string
  icon?: JSX.Element
  name: string
  onClick?: () => void
}

const NavBarTools = (): JSX.Element => {
  // 语言切换选项列表
  const { translationOptionItems } = LanguageOptions()

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
    // {
    //   id: 'tool-theme',
    //   name: '',
    //   tooltip: 'Turn off the light/dark',
    //   icon: <SunIcon />,
    //   onClick() {
    //     console.log('Turn off the light/dark')
    //   },
    // },
    {
      id: 'tool-translation',
      name: '',
      tooltip: 'Translation',
      icon: <TranslateIcon />,
      menus: translationOptionItems,
    },
  ]

  // 菜单锚元素（菜单列表位于哪个元素下方）
  const [menuPositionAnchorElement, setMenuPositionAnchorElement] =
    useState<HTMLElement | null>(null)
  // 展示菜单的按钮 ID
  const [menuButtonSelected, setMenuButtonSelected] = useState<string | null>(
    null
  )
  // 点击展示菜单的按钮
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    item: ToolButtonItemType
  ) => {
    setMenuPositionAnchorElement(event.currentTarget)
    setMenuButtonSelected(item.id)
    if (item.onClick) item.onClick()
  }

  return (
    <div>
      {toolIconButtons?.map((item: ToolButtonItemType) => (
        <React.Fragment key={item.id}>
          {/* tooltip & button */}
          <Tooltip
            arrow
            title={
              <Typography variant="inherit" className="front-h5">
                {item.tooltip}
              </Typography>
            }
            TransitionComponent={Zoom}
            TransitionProps={{ timeout: 200 }}
          >
            <IconButton
              aria-label={item.name}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => handleClick(e, item)}
            >
              {item.icon}
            </IconButton>
          </Tooltip>

          {/* menu 下拉列表 */}
          {item.menus && (
            <Menu
              menuItem={item}
              anchorElement={menuPositionAnchorElement}
              changeAnchorElement={setMenuPositionAnchorElement}
              menuAnchorElIdSelected={menuButtonSelected}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default NavBarTools
