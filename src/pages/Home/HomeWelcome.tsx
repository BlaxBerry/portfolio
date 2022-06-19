import Typography from '@material-ui/core/Typography'
import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const HomeWelcome = () => {
  return (
    <div
      style={{
        height: '100vh',
      }}
      className="display-flex flex-direction-column flex-justify-content-center flex-align-items-center"
    >
      {/* title */}
      <AnimationOnScroll
        animateIn="animate__rubberBand"
        initiallyVisible={true}
        offset={0}
      >
        <Typography
          variant="h2"
          component="h2"
          className="text-align-center front-700 front-white"
        >
          {"Chen's Portfolio"}
        </Typography>
      </AnimationOnScroll>

      {/* subtitle items */}
      <AnimationOnScroll
        animateIn="animate__fadeInLeftBig"
        animateOnce={true}
        delay={100}
      >
        <p className="text-align-center front-white front-h2">aaaaaaaa</p>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInLeftBig"
        animateOnce={true}
        delay={200}
      >
        <p className="text-align-center front-white front-h2">aaaaaaaa</p>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInLeftBig"
        animateOnce={true}
        delay={300}
      >
        <p className="text-align-center front-white front-h2">aaaaaaaa</p>
      </AnimationOnScroll>
    </div>
  )
}

export default HomeWelcome
