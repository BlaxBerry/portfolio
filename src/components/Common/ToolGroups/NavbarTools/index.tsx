import React, { useState } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import SunIcon from '@material-ui/icons/WbSunnyOutlined'
// import MoonIcon from '@material-ui/icons/Brightness3Outlined'
import TranslateIcon from '@material-ui/icons/Translate'
import { useWindowSize } from '../../../../hooks'
import { PROJECT_GITHUB_REPOSITORY } from '../../../../config'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ReactCountryFlag from 'react-country-flag'

interface ToolButtonItemType {
  id: string
  name: string
  icon: JSX.Element
  tooltip: string
  href?: string
  onClick?: () => void
  menus?: Array<ToolMenuItemType>
}

interface ToolMenuItemType {
  id: string
  name: string | React.ReactNode
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
      onClick: () => {
        console.log('GitHub repository')
        window.open(PROJECT_GITHUB_REPOSITORY, '_blank')
      },
    },
    {
      id: 'tool-theme',
      name: '',
      tooltip: 'Turn off the light/dark',
      icon: <SunIcon />,
      onClick: () => {
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
          id: 'cn',
          name: (
            <>
              <ReactCountryFlag countryCode="CN" />
              CN
            </>
          ),
          onClick: () => {
            console.log('cn')
          },
        },
        {
          id: 'en',
          name: (
            <>
              <ReactCountryFlag countryCode="US" />
              EN
            </>
          ),
          onClick: () => {
            console.log('en')
          },
        },
        {
          id: 'ja',
          name: (
            <>
              <ReactCountryFlag countryCode="JP" />
              JA
            </>
          ),
          onClick: () => {
            console.log('ja')
          },
        },
      ],
    },
  ]

  const { isPC, isMobile } = useWindowSize()

  const [menuSelected, setMenuSelected] = useState<string | null>(null)
  const [anchorMenuBtn, setAnchorMenuBtn] = useState<null | HTMLElement>(null) // Material-ui 处理逻辑，别乱动

  const handleMenuBtnClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    item: ToolButtonItemType
  ) => {
    if (item.menus) {
      setAnchorMenuBtn(event.currentTarget)
      setMenuSelected(item.id)
    }
    if (item.onClick) item.onClick()
  }

  const handleMenuBtnClose = (func?: (() => void) | null) => {
    setAnchorMenuBtn(null)
    if (func) func()
  }

  const renderMenuLayout = (item: ToolButtonItemType): JSX.Element => {
    return (
      <>
        <IconButton
          aria-label={item.name}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={(e) => handleMenuBtnClick(e, item)}
        >
          {item.icon}
        </IconButton>
        {item?.menus && (
          <Menu
            id="simple-menu"
            anchorEl={anchorMenuBtn}
            keepMounted
            open={Boolean(anchorMenuBtn) && menuSelected === item.id}
            onClose={() => handleMenuBtnClose()}
          >
            {item?.menus?.map((menuItem) => (
              <MenuItem
                key={menuItem?.id}
                onClick={() => handleMenuBtnClose(menuItem.onClick)}
              >
                {menuItem?.name}
              </MenuItem>
            ))}
          </Menu>
        )}
      </>
    )
  }

  return (
    <div>
      {toolIconButtons?.map((item: ToolButtonItemType) => (
        <React.Fragment key={item.id}>
          {/* PC 工具按钮组布局 */}
          {isPC && (
            <Tooltip title={item.tooltip}>{renderMenuLayout(item)}</Tooltip>
          )}

          {/* Mobile 工具按钮组布局 */}
          {isMobile && renderMenuLayout(item)}
        </React.Fragment>
      ))}
    </div>
  )
}

export default NavBarTools
