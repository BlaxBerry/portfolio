import Typography from '@material-ui/core/Typography'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Languages } from '../../../../types'

interface DetailWorkDescriptionProps {
  description: Languages
}

export default function DetailWorkDescription({
  description: descriptionAll,
}: DetailWorkDescriptionProps) {
  const {
    i18n: { language },
  } = useTranslation()

  const description = useMemo(() => {
    return descriptionAll?.[language]
  }, [descriptionAll, language])

  return (
    <div>
      {/* TODO: 间距 */}

      {!description && (
        <Typography
          align="center"
          style={{
            fontSize: '1.2rem',
            lineHeight: '2.4rem',
            whiteSpace: 'pre-line',
          }}
        >
          empty。。
        </Typography>
      )}

      {description && (
        <Typography
          style={{
            fontSize: '1.2rem',
            lineHeight: '2.4rem',
            whiteSpace: 'pre-line',
          }}
        >
          {description}
        </Typography>
      )}
    </div>
  )
}
