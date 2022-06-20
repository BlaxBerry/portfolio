import React from 'react'
import Typography from '@material-ui/core/Typography'
import { AnimationOnScroll } from 'react-animation-on-scroll'

// 该页面组件在屏幕中居中展示
const HomeWelcome = () => {
  // const [count, SetCount] = React.useState(0)

  return (
    <div
      className="display-flex flex-direction-column flex-justify-content-center flex-align-items-center"
      style={{ height: '100vh' }}
    >
      {/* chen's Portfolio */}
      <AnimationOnScroll animateIn="animate__rubberBand">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          className="front-white front-700"
        >
          {"Chen's Portfolio"}
        </Typography>
      </AnimationOnScroll>

      {/* after first time accessing's "thanks watching" */}
      <AnimationOnScroll animateIn="animate__bounceInUp">
        <Typography
          variant="h4"
          component="h4"
          align="center"
          gutterBottom
          className="front-700 front-white"
        >
          {'Thanks for Watching'}
        </Typography>
      </AnimationOnScroll>

      {/* TODO: down arrow */}
    </div>
  )
}

export default HomeWelcome
