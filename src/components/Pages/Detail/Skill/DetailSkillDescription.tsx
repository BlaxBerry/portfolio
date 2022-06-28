import React from 'react'
import { useTranslation } from 'react-i18next'
import { Title, Text } from '../../../Common'
import { SkillItemType } from '../../Skills/SkillsList'
import DeatilSkillEmpty from './DeatilSkillEmpty'

interface DetailSkillDescriptionProps {
  currentSkill: SkillItemType | undefined
}

export default function DetailSkillDescription({
  currentSkill,
}: DetailSkillDescriptionProps): JSX.Element {
  const { t } = useTranslation()

  return (
    <React.Fragment>
      <Title title={t('pages.detail-skill.about')} titleSize={'h5'} />

      {/* 有详情信息时 */}
      {currentSkill?.extraInfo?.description && (
        <Text align={'center'}>{currentSkill?.extraInfo?.description}</Text>
      )}

      {/* 没有详情信息时 */}
      {!currentSkill?.extraInfo?.description && <DeatilSkillEmpty />}
    </React.Fragment>
  )
}
