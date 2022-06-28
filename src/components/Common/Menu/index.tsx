import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import {
  ToolButtonItemType as MenuButtonItemType,
  ToolMenuListItemType as MenuListItemType,
} from '../ToolGroups/NavbarTools/index'
import { isLanguageOptionSelected } from '../../../utils'

interface CustomMenuProps {
  menuItem: MenuButtonItemType
  anchorElement: HTMLElement | null
  changeAnchorElement: (element: HTMLElement | null) => void
  menuAnchorElIdSelected: string | null
}

const CustomMenu = ({
  menuItem,
  anchorElement, // menu position under which element
  changeAnchorElement,
  menuAnchorElIdSelected, // menu will show after clicking which element
}: CustomMenuProps) => {
  const { i18n } = useTranslation()

  // 关闭菜单列表
  const closeMenu = () => changeAnchorElement(null)

  // 是否展示菜单列表
  const openMenu = useCallback(
    (ID: string): boolean => {
      return Boolean(anchorElement) && menuAnchorElIdSelected === ID
    },
    [anchorElement, menuAnchorElIdSelected]
  )

  // 点击展示菜单列表选项
  const handleClickMenuListItem = (listItem: MenuListItemType) => {
    closeMenu()
    if (listItem.onClick) listItem.onClick()
  }

  // 针对翻译菜单的选项，根据 i18n 当前语言判断该选项是否被选中
  const languageOptionIsSelected = useCallback(
    (itemLangID: string | undefined): boolean => {
      return isLanguageOptionSelected(itemLangID, i18n.language)
    },
    [i18n?.language]
  )

  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorElement}
      keepMounted
      open={openMenu(menuItem.id)}
      onClose={closeMenu}
    >
      {menuItem?.menus?.map((menuListItem) => (
        <MenuItem
          key={menuListItem?.id}
          onClick={() => handleClickMenuListItem(menuListItem)}
          style={{
            backgroundColor: languageOptionIsSelected(menuListItem.langID)
              ? 'rgba(0, 0, 0, 0.1)'
              : 'transparent',
          }}
        >
          {menuListItem?.icon && (
            <ListItemIcon style={{ minWidth: 30 }}>
              {menuListItem?.icon}
            </ListItemIcon>
          )}
          <Typography variant="inherit" noWrap>
            {menuListItem?.name}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  )
}

export default CustomMenu
