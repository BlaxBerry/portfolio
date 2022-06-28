import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

export interface TabItemsType {
  to: string
  name: string
}

interface CustomTabProps {
  tabItems: TabItemsType[]
}

const CustomTabs = ({ tabItems }: CustomTabProps): JSX.Element => {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedTabIndex, setSelectedTabIndex] = React.useState<number>(0)

  // 判断浏览器地址栏的URL，若合法则选中对应 Tab Ttem，否则默认选择第一项
  useEffect(() => {
    const skillBranchName = location.pathname.slice(
      location.pathname.lastIndexOf('/') + 1
    )
    const isInclude = tabItems
      .map((item) => item.to)
      .findIndex((item) => item === skillBranchName)
    if (isInclude !== -1) setSelectedTabIndex(isInclude)
  }, [location, tabItems])

  const handleChange = (event: unknown, selectedTabIndex: number) => {
    setSelectedTabIndex(selectedTabIndex)
    const childrenRouteURL = tabItems[selectedTabIndex].to
    navigate(`/skills/${childrenRouteURL}`)
  }

  return (
    <div>
      <Tabs
        value={selectedTabIndex}
        onChange={handleChange}
        variant="fullWidth"
        aria-label="simple tabs example"
        indicatorColor="primary"
      >
        {tabItems.map((item, index) => (
          <Tab
            key={index}
            label={item.name}
            {...{
              id: `simple-tab-${index}`,
              'aria-controls': `simple-tabpanel-${index}`,
            }}
            style={{ textTransform: 'none' }}
          />
        ))}
      </Tabs>
    </div>
  )
}

export default CustomTabs
