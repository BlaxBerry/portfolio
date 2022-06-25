import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import { WarpFullScreen, Empty, Title } from '../components/Common'

const IndexPage = (): JSX.Element => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/404', { replace: true })
  }, [navigate])

  return (
    <WarpFullScreen>
      {/* TODO: 顶间距占位 */}
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />

      {/* title */}
      <Title title={'Opps, Not Found'} />

      {/* TODO: 间距 */}
      <br />

      <Empty>
        <p>What you are looking for dose not exist</p>
        <Button
          variant="outlined"
          onClick={() => navigate('/', { replace: true })}
        >
          Back to Home
        </Button>
      </Empty>
    </WarpFullScreen>
  )
}

export default IndexPage
