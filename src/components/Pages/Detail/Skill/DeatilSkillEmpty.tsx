import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '@material-ui/core/Button'
import { Empty, Text } from '../../../Common'

export default function DeatilSkillEmpty(): JSX.Element {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <Empty>
      <Text align={'center'}>
        <p>{t('pages.detail-skill.empty-content.text-1')}</p>
        <p>{t('pages.detail-skill.empty-content.text-2')}</p>
        <Button
          variant="outlined"
          onClick={() => navigate('/skills')}
          style={{ textTransform: 'none' }}
        >
          {t('pages.detail-skill.empty-content.naviagtion-button')}
        </Button>
      </Text>
    </Empty>
  )
}
