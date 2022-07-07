import React from 'react'
import Typography from '@material-ui/core/Typography'

interface TextProps {
  children: React.ReactNode
  // ellipsis?: boolean
  align?: 'left' | 'center' | 'right'
  // className?: string
}

const Text = ({
  children,
  // ellipsis = false,
  align = 'left',
}: TextProps) => {
  return (
    <>
      <Typography
        align={align}
        component="div"
        style={{
          fontSize: '1.2rem',
          lineHeight: '2.4rem',
          whiteSpace: 'pre-line',
        }}
      >
        {children}
      </Typography>
    </>
  )
}

export default Text
