import React, { ForwardedRef, useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import {
  ToolButtonItemType as MenuButtonItemType,
  ToolMenuItemType as MenuItemType,
} from '../ToolGroups/NavbarTools/index'

interface CustomMenuProps {
  item: MenuButtonItemType
  forwardRef?: ForwardedRef<unknown>
}

const CustomMenu = (props: CustomMenuProps) => {
  // 展示菜单的按钮
  const [menuSelected, setMenuSelected] = useState<string | null>(null)
  // 菜单的锚元素
  const [menuPositionUnderElement, setMenuPositionUnderElement] =
    useState<null | HTMLElement>(null)

  // 获取展示菜单对应的按钮元素（展开菜单）
  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuPositionUnderElement(event.currentTarget)
  }
  // 清除展示菜单对应的按钮元素（关闭菜单）
  const closeMenu = () => {
    setMenuPositionUnderElement(null)
  }

  // 点击菜单对应的按钮
  const handleClickMenuBtn = (
    event: React.MouseEvent<HTMLButtonElement>,
    item: MenuButtonItemType
  ) => {
    if (item.menus) {
      openMenu(event)
      setMenuSelected(item.id)
    }
    if (item.onClick) item.onClick()
  }

  // 点击菜单的选项元素
  const handleClickMenuItem = (item: MenuItemType) => {
    closeMenu()
    if (item.onClick) item.onClick()
  }

  return (
    <>
      <IconButton
        aria-label={props.item.name}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={(e) => handleClickMenuBtn(e, props.item)}
      >
        {props.item.icon}
      </IconButton>
      {props.item?.menus && (
        <Menu
          id="simple-menu"
          anchorEl={menuPositionUnderElement}
          keepMounted
          open={
            Boolean(menuPositionUnderElement) && menuSelected === props.item.id
          }
          onClose={closeMenu}
        >
          {props.item?.menus?.map((menuItem) => (
            <MenuItem
              key={menuItem?.id}
              onClick={() => handleClickMenuItem(menuItem)}
            >
              {menuItem?.icon && (
                <ListItemIcon style={{ minWidth: 30 }}>
                  {menuItem?.icon}
                </ListItemIcon>
              )}
              <Typography variant="inherit" noWrap>
                {menuItem?.name}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  )
}

export default CustomMenu
