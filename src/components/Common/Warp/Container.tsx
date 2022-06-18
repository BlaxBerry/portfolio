import React from 'react'
import Container from '@material-ui/core/Container'
import { WarpProps } from '.'

const InsideContainer = ({ children }: WarpProps) => {
  return (
    <Container
      maxWidth="lg"
      style={{ minHeight: '100vh', backgroundColor: '#cfe8fc' }}
    >
      {children}
    </Container>
  )
}

export default InsideContainer
