import React from 'react'
import clsx from 'clsx'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { useTranslation } from 'react-i18next'
import { Title, Text } from '../../Common'
import { useWindowSize } from '../../../hooks'

// 该页面组件在屏幕中居中展示
const HomeAboutBrief = () => {
  const { t } = useTranslation()
  const { isMobile } = useWindowSize()

  return (
    <div
      className="display-flex flex-direction-column flex-justify-content-center flex-align-items-center"
      style={{ height: '100vh' }}
    >
      {/* title */}
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <Title title={t('pages.home.about-site-brief.title')} />
      </AnimationOnScroll>

      {/* content */}
      <Text align={isMobile ? 'left' : 'center'}>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce={true}
          delay={100}
        >
          <p className={clsx(isMobile ? 'display-inline' : 'display-block')}>
            {t('pages.home.about-site-brief.text-1')}
          </p>
          <p className={clsx(isMobile ? 'display-inline' : 'display-none')}>
            {t('pages.home.about-site-brief.text-2')}
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce={true}
          delay={200}
        >
          <p className={clsx(isMobile ? 'display-none' : 'display-block')}>
            {t('pages.home.about-site-brief.text-2')}
          </p>
        </AnimationOnScroll>
      </Text>
    </div>
  )
}

export default HomeAboutBrief
