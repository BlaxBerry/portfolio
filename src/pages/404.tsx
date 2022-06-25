import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { WarpFullScreen, Empty, Title, Text } from '../components/Common'

const IndexPage = (): JSX.Element => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/404', { replace: true })
  }, [navigate])

  return (
    <WarpFullScreen>
      <div
        className="display-flex flex-direction-column flex-justify-content-center flex-align-items-center"
        style={{ height: '100vh' }}
      >
        {/* title */}
        <Title title={'Oops! Not Found'} titleSize={'h3'} />

        {/* empty content */}
        <Empty>
          <Text align={'center'}>
            {/* TODO: i18next */}
            <p>What you are looking for dose not exist</p>
            <Button
              variant="outlined"
              onClick={() => navigate('/', { replace: true })}
            >
              {/* TODO: i18next */}
              Back to Home
            </Button>
          </Text>
        </Empty>
      </div>
    </WarpFullScreen>
  )
}

export default IndexPage
