import React from 'react'
import { Title, Text } from '../../../Common'
import { SkillItemType } from '../../Skills/SkillsList'
import { useWindowSize } from '../../../../hooks'
import DeatilSkillEmpty from './DeatilSkillEmpty'

interface DetailSkillDescriptionProps {
  currentSkill: SkillItemType | undefined
}

export default function DetailSkillDescription({
  currentSkill,
}: DetailSkillDescriptionProps): JSX.Element {
  const { isMobile } = useWindowSize()

  return (
    <React.Fragment>
      <Title
        title={'About this skill'}
        titleSize={isMobile ? 'h5' : undefined}
      />

      {/* 有详情信息时 */}
      {currentSkill?.extraInfo?.description && (
        <Text align={'center'}>{currentSkill?.extraInfo?.description}</Text>
      )}

      {/* 没有详情信息时 */}
      {!currentSkill?.extraInfo?.description && <DeatilSkillEmpty />}
    </React.Fragment>
  )
}
