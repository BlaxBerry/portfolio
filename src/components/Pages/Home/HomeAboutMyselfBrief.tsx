import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { useTranslation } from 'react-i18next'
import { Title, Text } from '../../Common'
import { useWindowSize } from '../../../hooks'

// 该页面组件在屏幕中居中展示
const HomeAboutBrief = () => {
  const { t } = useTranslation()
  const { isTextWrap } = useWindowSize()

  return (
    <div
      className="display-flex flex-direction-column flex-justify-content-center flex-align-items-center"
      style={{ height: '100vh' }}
    >
      {/* title */}
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <Title title={t('pages.home.about-me-brief.title')} />
      </AnimationOnScroll>

      {/* content */}
      <Text align={isTextWrap ? 'center' : 'left'}>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce={true}
          delay={100}
        >
          <span>{t('pages.home.about-me-brief.text')}</span>
        </AnimationOnScroll>
      </Text>
    </div>
  )
}

export default HomeAboutBrief
