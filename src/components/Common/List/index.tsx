import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'
import { DrwerListItemType, DrwerListCollapseItemType } from '../Drawer'

interface ListProps {
  list: Array<DrwerListItemType>
}

const CustomList = ({ list }: ListProps): JSX.Element => {
  const location = useLocation()

  // 被选中的（有选中状态）的列表选择项
  const [choosenItems, setChoosenItems] = useState<Array<string>>([])
  // 被点击的列表选择项ID
  const [clickedItemID, setClickedItemID] = useState<string | null>()

  // 选点击列表选择选择项
  const handleClickDrawerListItem = (item: DrwerListItemType) => {
    if (item.onClick) item.onClick()
    else if (Boolean(item.collapse) && clickedItemID === item.id) {
      setClickedItemID(null)
    } else {
      setClickedItemID(item.id)
      setChoosenItems([...choosenItems, item.id])
    }
  }

  // 选点击有折叠面板的列表选择项
  const handleClickCollapseListItem = (item: DrwerListCollapseItemType) => {
    if (item.onClick) item.onClick()
  }

  useEffect(() => {
    // 针对 Drawer 中 List 的 item 的路由链接选择项的选中状态
    const currentRouteName = location.pathname.split('/')[1]
    if (currentRouteName) setChoosenItems([...choosenItems, currentRouteName])
    else if (location.pathname === '/')
      setChoosenItems([...choosenItems, 'home'])

    return () => {
      // 组件卸载时清空 states
      setClickedItemID(null)
      setChoosenItems([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, setChoosenItems])

  return (
    <List style={{ maxWidth: '300px', minWidth: '200px' }}>
      {list.map((item: DrwerListItemType) => (
        <React.Fragment key={item.id}>
          {/* 列表选择 */}
          <ListItem
            button
            onClick={() => handleClickDrawerListItem(item)}
            style={{
              backgroundColor: choosenItems.includes(item.id)
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
                      style={{ paddingLeft: 32 }}
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
