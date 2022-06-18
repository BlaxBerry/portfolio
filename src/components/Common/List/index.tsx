import React, { useState } from 'react'
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
  // 选中的列表选择
  const [selectedListID, setSelectedListID] = useState<string | null>()
  // 选点击列表选择
  const handleClickDrawerListItem = (item: DrwerListItemType) => {
    if (item.onClick) item.onClick()
    if (selectedListID === item.id) setSelectedListID(null)
    else setSelectedListID(item.id)
  }

  return (
    <List style={{ maxWidth: '300px', minWidth: '200px' }}>
      {list.map((item: DrwerListItemType) => (
        <React.Fragment key={item.id}>
          {/* 列表选择 */}
          <ListItem button onClick={() => handleClickDrawerListItem(item)}>
            {/* 顶头图标 */}
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
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
              <>
                {selectedListID === item.id ? <ExpandLess /> : <ExpandMore />}
              </>
            )}
          </ListItem>

          {/* 列表选择的折叠面板内容 */}
          {item.collapse && (
            <Collapse
              in={selectedListID === item.id}
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
                      onClick={item.onClick}
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
