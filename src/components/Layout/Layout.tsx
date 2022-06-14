import React, { ReactNode, useMemo } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { ScrollTop } from '../Common'
import {
  HeaderMobile,
  NavbarMobile,
  NavbarPC,
  FooterPC,
  FooterMobile,
} from './index'
import { useWindowSize } from '../../hooks'

interface LayoutProps {
  children: ReactNode
}

const Layout = (props: LayoutProps): JSX.Element => {
  const { isPC, isMobile, windowSize } = useWindowSize()
  const isLargeScreen = useMemo(
    (): boolean => windowSize === 'xxl',
    [windowSize]
  )

  const exampleContent = [...new Array(24)]
    .map(
      () =>
        `Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
    )
    .join('\n')

  const PCLayout = (): JSX.Element => (
    <Container maxWidth="lg">
      <Typography component="div" style={{ backgroundColor: '#cfe8fc' }}>
        {/* PC Top NavBar */}
        <NavbarPC />

        {/* 各个路由页面内容 */}
        {props.children}

        {/* TOFIX: */}
        {exampleContent}

        {/* PC Bootom Footer */}
        <FooterPC />
      </Typography>
    </Container>
  )

  const MobileLayout = (): JSX.Element => (
    <Typography component="div" style={{ backgroundColor: '#cfe8fc' }}>
      {/* 各个路由页面内容 */}
      {props.children}

      {/* TOFIX: */}
      {exampleContent}

      {/* Mobile Bootom Footer */}
      <FooterMobile />
    </Typography>
  )

  return (
    <React.Fragment>
      <CssBaseline />

      {/* Mobile Header  */}
      {isMobile && <HeaderMobile />}

      {/* Back to Top */}
      {!isLargeScreen && <div id="back-to-top-anchor" />}
      {!isLargeScreen && <ScrollTop />}

      {/* Mobile 布局 */}
      {isMobile && MobileLayout()}

      {/* PC 布局 */}
      {isPC && PCLayout()}

      {/* Mobile Bottom NavBar */}
      {isMobile && <NavbarMobile />}
    </React.Fragment>
  )
}

export default Layout
