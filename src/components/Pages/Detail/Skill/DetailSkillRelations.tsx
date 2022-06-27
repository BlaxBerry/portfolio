import React from 'react'
import { Title } from '../../../Common'
import SkillsList, { SkillItemType } from '../../Skills/SkillsList'
import { useWindowSize } from '../../../../hooks'

interface DetailSkillRelationsProps {
  list: (SkillItemType | undefined)[]
}

export default function DetailSkillRelations({
  list,
}: DetailSkillRelationsProps): JSX.Element {
  const { isMobile } = useWindowSize()

  return (
    <React.Fragment>
      <Title
        title={'Relations Skills I Have Used :'}
        titleSize={isMobile ? 'h5' : undefined}
      />
      <SkillsList
        list={list as SkillItemType[]}
        justifyContent={isMobile ? 'flex-start' : 'center'}
        xs={3}
        sm={2}
        md={1}
        lg={1}
        xl={1}
      />

      {/* TODO: 间距 */}
      <br />
      <br />
    </React.Fragment>
  )
}
