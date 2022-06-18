import React, { useCallback } from 'react'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import {
  ToolButtonItemType as MenuButtonItemType,
  ToolMenuListItemType as MenuListItemType,
} from '../ToolGroups/NavbarTools/index'

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
    // closeMenu() // TOTO：按需处理是否需要关闭菜单
    if (listItem.onClick) listItem.onClick()
  }

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
