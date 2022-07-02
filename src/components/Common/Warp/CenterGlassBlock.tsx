import React from 'react'
import Box from '@material-ui/core/Box'

export interface WarpProps {
  children: NonNullable<React.ReactNode>
}

export default function CenterGlassBlock({ children }: WarpProps) {
  return (
    <Box
      component="div"
      borderRadius={10}
      boxShadow={3}
      style={{
        background: 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(20px)',
        position: 'relative',
      }}
    >
      {children}
    </Box>
  )
}
