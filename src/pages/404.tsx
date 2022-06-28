import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '@material-ui/core/Button'
import { WarpFullScreen, Empty, Title, Text } from '../components/Common'

const IndexPage = (): JSX.Element => {
  const { t } = useTranslation()
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
        <Title
          title={t('pages.404.title')}
          subTitle={t('pages.404.subtitle')}
        />

        {/* empty content */}
        <Empty>
          <Text align={'center'}>
            <p>{t('pages.404.text')}</p>
            <Button
              variant="outlined"
              onClick={() => navigate('/', { replace: true })}
            >
              {t('pages.404.naviagtion-button')}
            </Button>
          </Text>
        </Empty>
      </div>
    </WarpFullScreen>
  )
}

export default IndexPage
