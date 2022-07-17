/**
 * 判断翻译菜单语言选项对应语言是否为当前语言，用于判断是否添加 style 样式等
 * @param {String | undefined} itemLangID  翻译菜单语言选项的 langID
 * @param {String} i18nCurrentLang i18next 当前的 language
 * @returns {Boolean} 该单语言选项对应语言是否为当前语言
 */
const isLanguageOptionSelected = (
  itemLangID: string | undefined,
  i18nCurrentLang: string
): boolean => {
  return Boolean(itemLangID) && i18nCurrentLang == itemLangID
}

/**
 * 判断主题菜单选项对应主题是否为当前主题，用于判断是否添加 style 样式等
 * @param {"light" | "dark"|  undefined} itemThemName  主题菜单选项的 theme
 * @param {String | undefined} currentTheme  当前主题
 */
const isThemeOptionSelected = (
  itemThemName: 'light' | 'dark' | undefined,
  currentTheme: string | undefined
): boolean => {
  return Boolean(itemThemName) && currentTheme === itemThemName
}

const regularExpression = {
  emailAddress:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  onlyCharts:
    /[^\s\d!@#$%^&*()_+-=[\]{}:;''""<>,.?|/\\！＠＃＄％＾＆＊（）＿＋ー＝『』【】「」：；’’””、。＜＞・？￥｜、]+/,
  antiBlank: /[^\s]+/,
}

export { isLanguageOptionSelected, isThemeOptionSelected, regularExpression }
