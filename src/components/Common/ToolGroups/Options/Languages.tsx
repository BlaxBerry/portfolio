import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { useTranslation } from 'react-i18next'
import { ToolMenuListItemType } from '../NavbarTools'

const LanguageOptions = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (languageID: string) => {
    i18n.changeLanguage(languageID)
  }

  const TRANSLATION_OPTIONS: Array<ToolMenuListItemType> = [
    {
      id: 'tool-translation-cn',
      langID: 'zh',
      icon: <ReactCountryFlag countryCode="CN" />,
      name: t('common.languages.zh'),
      onClick: () => changeLanguage('zh'),
    },
    {
      id: 'tool-translation-en',
      langID: 'en',
      icon: <ReactCountryFlag countryCode="US" />,
      name: t('common.languages.en'),
      onClick: () => changeLanguage('en'),
    },
    {
      id: 'tool-translation-ja',
      langID: 'ja',
      icon: <ReactCountryFlag countryCode="JP" />,
      name: t('common.languages.ja'),
      onClick: () => changeLanguage('ja'),
    },
  ]

  return {
    TRANSLATION_OPTIONS,
  }
}

export default LanguageOptions
