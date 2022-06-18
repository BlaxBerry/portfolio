import Typography from '@material-ui/core/Typography'
import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const HomeWelcome = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
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
