import React, { useMemo } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { useTranslation } from 'react-i18next'
import { Title, Text } from '../../Common'
import { useWindowSize } from '../../../hooks'

// 该页面组件在屏幕中居中展示
const HomeWorksBrief = () => {
  const { t } = useTranslation()
  const { isTextWrap } = useWindowSize()

  const wrapClassName = useMemo(
    (): string => (isTextWrap ? 'display-block' : 'display-inline'),
    [isTextWrap]
  )
  return (
    <div>
      {/* TODO: 顶间距占位 */}
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />

      {/* title */}
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <Title title={t('pages.home.works-brief.title')} />
      </AnimationOnScroll>

      {/* content */}
      <Text align={isTextWrap ? 'center' : 'left'}>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce={true}
          delay={100}
        >
          <span className={wrapClassName}>
            {t('pages.home.works-brief.text-1')}
          </span>
          <span className={wrapClassName}>
            {t('pages.home.works-brief.text-2')}
          </span>
        </AnimationOnScroll>
      </Text>
    </div>
  )
}

export default HomeWorksBrief
