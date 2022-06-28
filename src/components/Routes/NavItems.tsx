import React from 'react'
import { useTranslation } from 'react-i18next'
import HomeIcon from '@material-ui/icons/Home'
import PieChartIcon from '@material-ui/icons/PieChart'
import PaletteIcon from '@material-ui/icons/Palette'

export interface NavigationItemType {
  to: string
  icon: JSX.Element
  title: string
}

export default function NavItems() {
  const { t } = useTranslation()

  const navigationItems: Array<NavigationItemType> = [
    {
      to: '/home',
      icon: <HomeIcon />,
      title: t('components.header.navbar.home'),
    },
    {
      to: '/skills',
      icon: <PieChartIcon />,
      title: t('components.header.navbar.skills'),
    },
    {
      to: '/works',
      icon: <PaletteIcon />,
      title: t('components.header.navbar.works'),
    },
    // {
    //     to: '/about',
    //     icon: <HelpOutlineIcon />,
    //     title: 'About',
    // }
  ]
  return { navigationItems }
}
