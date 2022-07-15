import React from 'react'
import WorksList from '../../../components/Pages/Works/WorksList'
import { WORKS_PC } from '../../../mock'

const IndexPage = (): JSX.Element => {
  return (
    <>
      <WorksList
        list={WORKS_PC}
        aspectRatio={1.6}
        xs={12}
        sm={6}
        md={6}
        lg={4}
        xl={4}
      />
    </>
  )
}

export default IndexPage
