import React from 'react'
import WorksList from '../../../components/Pages/Works/WorksList'
import { WORKS_MOBILE } from '../../../mock'

const IndexPage = (): JSX.Element => {
  return (
    <>
      <WorksList
        list={WORKS_MOBILE}
        aspectRatio={0.47}
        xs={6}
        sm={4}
        md={4}
        lg={2}
        xl={2}
      />
    </>
  )
}

export default IndexPage
