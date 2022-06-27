import React, { ReactNode, useMemo } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { ScrollTop } from '../Common'
import Header from './Header'
import Footer from './Footer'
import { useWindowSize } from '../../hooks'

interface LayoutProps {
  children: ReactNode
}

const Layout = (props: LayoutProps): JSX.Element => {
  const { windowSize } = useWindowSize()

  const isLargeScreen = useMemo(
    (): boolean => windowSize === 'xxl',
    [windowSize]
  )

  return (
    <React.Fragment>
      <CssBaseline />
      {/* layout top header */}
      <Header />

      {/* Back to Top */}
      {!isLargeScreen && <div id="back-to-top-anchor" />}
      {!isLargeScreen && <ScrollTop />}

      <Typography component="div">
        {/* layout content (各个路由页面内容) */}
        {props.children}

        {/* layout Bootom Footer */}
        <Footer />
      </Typography>
    </React.Fragment>
  )
}

export default Layout
