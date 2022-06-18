import React from 'react'
import Container from '@material-ui/core/Container'

export interface WarpProps {
  children: NonNullable<React.ReactNode>
}

const FullScreen = ({ children }: WarpProps) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'white', // TODO: delete
      }}
    >
      <Container maxWidth="lg">{children}</Container>
    </div>
  )
}

export default FullScreen
