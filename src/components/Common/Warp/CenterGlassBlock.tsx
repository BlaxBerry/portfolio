import React from 'react'
import Container from '@material-ui/core/Container'

export interface WarpProps {
  children: NonNullable<React.ReactNode>
}

export default function CenterGlassBlock({ children }: WarpProps) {
  return (
    <Container
      maxWidth="md"
      style={{
        background: 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(20px)',
        // TODO: 间距
        padding: '30px 60px',
      }}
    >
      {children}
    </Container>
  )
}
