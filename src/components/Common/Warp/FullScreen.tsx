import React from 'react'
import Container from '@material-ui/core/Container'
import { WarpProps } from '.'

const FullScreen = ({ children }: WarpProps) => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'pink' }}>
      <Container maxWidth="lg">{children}</Container>
    </div>
  )
}

export default FullScreen
