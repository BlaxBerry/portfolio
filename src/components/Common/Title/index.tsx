import React from 'react'
import Typography from '@material-ui/core/Typography'

interface TitleProps {
  title: React.ReactNode
  subTitle?: React.ReactNode
}

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <>
      {/* main title */}
      <Typography
        variant="h4"
        component="h4"
        align="center"
        className="front-700"
      >
        {title}
      </Typography>

      {/* subtitle */}
      {subTitle && (
        <Typography
          variant="h5"
          component="div"
          align="center"
          className="front-700"
        >
          {subTitle}
        </Typography>
      )}

      <br />
    </>
  )
}

export default Title
