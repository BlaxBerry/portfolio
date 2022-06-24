import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Title, Text } from '../../Common'
import { useWindowSize } from '../../../hooks'

// 该页面组件在屏幕中居中展示
const HomeAboutBrief = () => {
  const { isMobile } = useWindowSize()

  return (
    <div
      className="display-flex flex-direction-column flex-justify-content-center flex-align-items-center"
      style={{ height: '100vh' }}
    >
      {/* title */}
      <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
        <Title title={'この私について'} />
      </AnimationOnScroll>

      {/* content */}
      <Text align={isMobile ? 'left' : 'center'}>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOnce={true}
          delay={100}
        >
          <p>TODO: about my self</p>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOnce={true}
          delay={200}
        ></AnimationOnScroll>
      </Text>
    </div>
  )
}

export default HomeAboutBrief
