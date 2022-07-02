import React from 'react'
import { useTranslation } from 'react-i18next'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

export default function SendLoading(): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className="my-contact-loading">
      <CircularProgress size={'5rem'} className="my-contact-loading-cricle" />
      <Typography
        className="my-contact-loading-message"
        gutterBottom
        variant="h5"
        align="center"
      >
        {t('pages.contact.sending')}
      </Typography>
    </div>
  )
}
