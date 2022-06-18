import React from 'react'
import Container from '@material-ui/core/Container'

export interface WarpProps {
  children: NonNullable<React.ReactNode>
  hasMask?: boolean
}

const InsideContainer = ({ children, hasMask = false }: WarpProps) => {
  console.log(hasMask) // TODO: mask 遮罩层 by CSS or div

  return (
    <Container
      maxWidth="lg"
      style={{
        minHeight: '100vh',
        // backgroundColor: '#cfe8fc'  // TODO: delete
      }}
    >
      {children}
    </Container>
  )
}

export default InsideContainer
