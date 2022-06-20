import React from 'react'
import clsx from 'clsx'
import Toolbar from '@material-ui/core/Toolbar'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Title, Text } from '../../components/Common'
import { useWindowSize } from '../../hooks'

// 该页面组件在屏幕中居中展示
const HomeWorksBrief = () => {
  const { isMobile } = useWindowSize()

  return (
    <>
      {/* TODO: 顶间距占位 */}
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />

      {/* title */}
      <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}>
        <Title title={'作品集について'} />
      </AnimationOnScroll>

      {/* content */}
      <Text align={isMobile ? 'left' : 'center'}>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOnce={true}
          delay={100}
        >
          <p className={clsx(isMobile ? 'display-inline' : 'display-block')}>
            フロントからバックエンドまで幅広く練習してきました。
          </p>
          <p className={clsx(isMobile ? 'display-inline' : 'display-none')}>
            これからポロジェットに携わりながら、作品集を不定期に更新します。
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOnce={true}
          delay={200}
        >
          <p className={clsx(isMobile ? 'display-none' : 'display-block')}>
            これからポロジェットに携わりながら、作品集を不定期に更新します。
          </p>
        </AnimationOnScroll>
      </Text>
    </>
  )
}

export default HomeWorksBrief
