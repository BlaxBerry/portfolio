import React from 'react'
import { useTranslation } from 'react-i18next'
import { useThemeSwitcher } from 'react-css-theme-switcher'
import SunIcon from '@material-ui/icons/WbSunnyOutlined'
import MoonIcon from '@material-ui/icons/Brightness3Outlined'
import { DrwerListCollapseItemType } from '../../Drawer'

export default function ThemesOptions() {
  const { t } = useTranslation()
  const { switcher, themes } = useThemeSwitcher()
  const toggleTheme = (isChecked: boolean): void => {
    switcher({ theme: isChecked ? themes.dark : themes.light })
  }

  const THEME_OPTIONIS: Array<DrwerListCollapseItemType> = [
    {
      id: 'tool-themes-light',
      theme: 'light',
      icon: <SunIcon />,
      name: t('common.theme.light'),
      onClick: () => toggleTheme(false),
    },
    {
      id: 'tool-themes-dark',
      theme: 'dark',
      icon: <MoonIcon />,
      name: t('common.theme.dark'),
      onClick: () => toggleTheme(true),
    },
  ]

  return {
    THEME_OPTIONIS,
  }
}
