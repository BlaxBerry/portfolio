import React from 'react'
import clsx from 'clsx'
import Toolbar from '@material-ui/core/Toolbar'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { useTranslation } from 'react-i18next'
import { Title, Text } from '../../Common'
import { useWindowSize } from '../../../hooks'

// 该页面组件在屏幕中居中展示
const HomeWorksBrief = () => {
  const { t } = useTranslation()
  const { isMobile } = useWindowSize()

  return (
    <div>
      {/* TODO: 顶间距占位 */}
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />

      {/* title */}
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <Title title={t('pages.home.works-brief.title')} />
      </AnimationOnScroll>

      {/* content */}
      <Text align={isMobile ? 'left' : 'center'}>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce={true}
          delay={100}
        >
          <p className={clsx(isMobile ? 'display-inline' : 'display-block')}>
            {t('pages.home.works-brief.text-1')}
          </p>
          <p className={clsx(isMobile ? 'display-inline' : 'display-none')}>
            {t('pages.home.works-brief.text-2')}
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce={true}
          delay={200}
        >
          <p className={clsx(isMobile ? 'display-none' : 'display-block')}>
            {t('pages.home.works-brief.text-2')}
          </p>
        </AnimationOnScroll>
      </Text>
    </div>
  )
}

export default HomeWorksBrief
