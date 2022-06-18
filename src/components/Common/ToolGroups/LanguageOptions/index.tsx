import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { ToolMenuListItemType } from '../NavbarTools'

const LanguageOptions = () => {
  const changeLanguage = (languageID: string) => {
    console.log(languageID)
  }

  const translationOptionItems: Array<ToolMenuListItemType> = [
    {
      id: 'tool-translation-cn',
      icon: <ReactCountryFlag countryCode="CN" />,
      name: 'CN',
      onClick: () => changeLanguage('cn'),
    },
    {
      id: 'tool-translation-en',
      icon: <ReactCountryFlag countryCode="US" />,
      name: ' EN',
      onClick: () => changeLanguage('en'),
    },
    {
      id: 'tool-translation-ja',
      icon: <ReactCountryFlag countryCode="JP" />,
      name: 'JA',
      onClick: () => changeLanguage('ja'),
    },
  ]

  return {
    translationOptionItems,
  }
}

export default LanguageOptions
