import React from 'react'
import Button from '../components/Common/Button'
import SunIcon from '@material-ui/icons/WbSunnyOutlined'

const IndexPage = (): JSX.Element => {
  return (
    <>
      <Button>xxx</Button>
      <Button>
        <SunIcon />
      </Button>
      <Button>
        <>
          aaa
          <SunIcon />
          sss
        </>
      </Button>
    </>
  )
}

export default IndexPage
