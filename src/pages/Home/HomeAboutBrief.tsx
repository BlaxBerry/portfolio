import React from 'react'
import clsx from 'clsx'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Title, Text } from '../../components/Common'
import { useWindowSize } from '../../hooks'

// 该页面组件在屏幕中居中展示
const HomeAboutBrief = () => {
  const { isMobile } = useWindowSize()

  return (
    <div
      className="display-flex flex-direction-column flex-justify-content-center flex-align-items-center"
      style={{ height: '100vh' }}
    >
      {/* title */}
      <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}>
        <Title title={'このサイトについて'} />
      </AnimationOnScroll>

      {/* content */}
      <Text align={isMobile ? 'left' : 'center'}>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOnce={true}
          delay={100}
        >
          <p className={clsx(isMobile ? 'display-inline' : 'display-block')}>
            これまでに手がけた作品や、身につけたスキルをこのポートフォリオでまとめいです。
          </p>
          <p className={clsx(isMobile ? 'display-inline' : 'display-none')}>
            このポートフォリオを通して、私のことを少しでも知っていただければ嬉しいと思います。
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOnce={true}
          delay={200}
        >
          <p className={clsx(isMobile ? 'display-none' : 'display-block')}>
            このポートフォリオを通して、私のことを少しでも知っていただければ嬉しいと思います。
          </p>
        </AnimationOnScroll>
      </Text>
    </div>
  )
}

export default HomeAboutBrief
