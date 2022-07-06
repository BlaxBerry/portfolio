import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ErrorIcon from '@material-ui/icons/Error'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

interface SendResultProps {
  sendResult: 'SUCCESS' | 'FAILED' | null
}
export default function SendResult({
  sendResult,
}: SendResultProps): JSX.Element {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className="my-contact-result">
      {/* icon */}
      <div className="my-contact-result-status-icon">
        {/* mail sending success */}
        {sendResult === 'SUCCESS' && (
          <ThumbUpIcon style={{ fontSize: '5rem', color: 'green' }} />
        )}
        {/* mail sending failed */}
        {sendResult === 'FAILED' && (
          <ErrorIcon color="error" style={{ fontSize: '5rem' }} />
        )}
      </div>

      {/* message */}
      {/* TODO：补充信息内容 & text style*/}
      <Typography
        className="my-contact-result-message"
        gutterBottom
        variant="h5"
        align="center"
      >
        {/* mail sending success */}
        {sendResult === 'SUCCESS' && t('pages.contact.send-success')}
        {/* mail sending failed */}
        {sendResult === 'FAILED' && t('pages.contact.send-failed')}
      </Typography>

      {/* navigation */}
      <Button
        type="submit"
        color="primary"
        variant="contained"
        size="large"
        // TODO: style
        style={{ marginTop: '2rem' }}
        onClick={() => navigate('/', { replace: true })}
      >
        {t('pages.404.naviagtion-button')}
      </Button>
    </div>
  )
}
