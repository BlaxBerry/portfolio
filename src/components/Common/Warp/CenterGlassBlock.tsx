import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

export interface WarpProps {
  children: NonNullable<React.ReactNode>
}

export default function CenterGlassBlock({ children }: WarpProps) {
  return (
    <Container maxWidth="md">
      <Box
        component="div"
        borderRadius={10}
        boxShadow={3}
        style={{
          background: 'rgba(255, 255, 255, 0.72)',
          backdropFilter: 'blur(20px)',
          position: 'relative',
          // TODO: 间距
          padding: '30px 60px',
        }}
      >
        {children}
      </Box>
    </Container>
  )
}
