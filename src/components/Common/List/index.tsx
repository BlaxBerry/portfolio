import React, { useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useThemeSwitcher } from 'react-css-theme-switcher'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'
import { DrwerListItemType, DrwerListCollapseItemType } from '../Drawer'
import { isLanguageOptionSelected, isThemeOptionSelected } from '../../../utils'
import getNavItems from '../../Routes/NavItems'

interface ListProps {
  list: Array<DrwerListItemType>
  style?: React.CSSProperties
}

const CustomList = ({ list, style }: ListProps): JSX.Element => {
  const location = useLocation()
  const { i18n } = useTranslation()
  const { currentTheme } = useThemeSwitcher()

  // 被点击的列表选择项ID
  const [clickedItemID, setClickedItemID] = useState<string | null>()

  // 选点击列表选择选择项
  const handleClickDrawerListItem = (item: DrwerListItemType) => {
    if (item.onClick) item.onClick()
    else if (Boolean(item.collapse) && clickedItemID === item.id) {
      setClickedItemID(null)
    } else setClickedItemID(item.id)
  }

  // 选点击有折叠面板的列表选择项
  const handleClickCollapseListItem = (item: DrwerListCollapseItemType) => {
    if (item.onClick) item.onClick()
  }

  const isOptionSelected = useCallback(
    (
      item: DrwerListItemType,
      optionItem: DrwerListCollapseItemType
    ): boolean => {
      switch (item.id) {
        // 针对 Drawer List 的翻译菜单的选项，根据 i18n 当前语言判断该选项是否被选中
        case 'drawer-translation':
          return isLanguageOptionSelected(optionItem.langID, i18n.language)
        // 针对 Drawer List 的主题菜单的选项，根据 current 当前主题判断是否为该选项是否被选中
        case 'drawer-theme':
          return isThemeOptionSelected(optionItem.theme, currentTheme)
        default:
          return false
      }
    },
    [i18n?.language, currentTheme]
  )

  // 针对 Drawer List 的路由链接选择项，根据当前 location.pathname 判断该选项是否被选中
  const { navigationItems } = getNavItems()
  const navLinkOptionIsSelected = useCallback(
    (itemRoutePathname: string | undefined): boolean => {
      if (!itemRoutePathname) return false
      else {
        // 1. if the params is really a pathname
        const isPathname = navigationItems
          .map((x) => x.to)
          .includes(itemRoutePathname)
        // 2. only get father if has children routes
        const currentRoutePathname = '/' + location.pathname.split('/')[1]
        return isPathname && currentRoutePathname === itemRoutePathname
      }
    },
    [location, navigationItems]
  )

  return (
    <List style={style}>
      {list.map((item: DrwerListItemType) => (
        <React.Fragment key={item.id}>
          {/* 列表选择 */}
          <ListItem
            button
            onClick={() => handleClickDrawerListItem(item)}
            style={{
              backgroundColor: navLinkOptionIsSelected(item.routePathname)
                ? 'rgba(0, 0, 0, 0.1)'
                : 'transparent',
            }}
          >
            {/* 顶头图标 */}
            {item.icon && (
              <ListItemIcon style={{ minWidth: 42 }}>{item.icon}</ListItemIcon>
            )}
            {/* 文本内容 */}
            <ListItemText
              primary={
                <Typography variant="inherit" noWrap>
                  {item.name}
                </Typography>
              }
            />
            {/* 下拉折叠图标 */}
            {item.collapse?.length && (
              <>{clickedItemID === item.id ? <ExpandLess /> : <ExpandMore />}</>
            )}
          </ListItem>

          {/* 列表选择的折叠面板内容 */}
          {item.collapse && (
            <Collapse
              in={clickedItemID === item.id}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {item.collapse?.map(
                  (collapseItem: DrwerListCollapseItemType) => (
                    <ListItem
                      button
                      key={collapseItem.id}
                      style={{
                        paddingLeft: 32,
                        backgroundColor: isOptionSelected(item, collapseItem)
                          ? 'rgba(0, 0, 0, 0.1)'
                          : 'transparent',
                      }}
                      onClick={() => handleClickCollapseListItem(collapseItem)}
                    >
                      {collapseItem.icon && (
                        <ListItemIcon style={{ minWidth: 32 }}>
                          {collapseItem.icon}
                        </ListItemIcon>
                      )}
                      <Typography variant="inherit" noWrap>
                        {collapseItem.name}
                      </Typography>
                    </ListItem>
                  )
                )}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </List>
  )
}

export default CustomList
