import React from 'react'
import Container from '@material-ui/core/Container'

export interface WarpProps {
  children: NonNullable<React.ReactNode>
}

const InsideContainer = ({ children }: WarpProps) => {
  return (
    <Container
      maxWidth="lg"
      style={{ minHeight: '100vh' }}
      className="front-white"
    >
      {children}
    </Container>
  )
}

export default InsideContainer
