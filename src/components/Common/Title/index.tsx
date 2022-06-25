import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Variant } from '@material-ui/core/styles/createTypography'

interface TitleProps {
  title: React.ReactNode
  subTitle?: React.ReactNode
  titleSize?: Variant
  subTitleSize?: Variant
}

const Title = ({
  title,
  subTitle,
  titleSize = 'h4',
  subTitleSize = 'h5',
}: TitleProps) => {
  return (
    <>
      {/* main title */}
      <Typography
        variant={titleSize}
        component="h4"
        align="center"
        className="front-700"
      >
        {title}
      </Typography>

      {/* subtitle */}
      {subTitle && (
        <Typography
          variant={subTitleSize}
          component="div"
          align="center"
          className="front-700"
        >
          {subTitle}
        </Typography>
      )}

      {/* TODO: 底部间距 */}
      <div style={{ marginBottom: '1rem' }} />
    </>
  )
}

export default Title
