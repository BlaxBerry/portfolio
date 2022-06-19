import React from 'react'
import { WrapTransparent } from '../../Common'

const FooterPC = (): JSX.Element => {
  return (
    <>
      <WrapTransparent>Footer</WrapTransparent>
      <div
        className="text-align-center front-white"
        style={{ backgroundColor: '#121212' }} // TODO: atomic
      >
        ©2022 Chen.Blaxberry{' '}
      </div>
    </>
  )
}

export default FooterPC
