import React from 'react'
import WorksList from '../../../components/Pages/Works/WorksList'
import { WORKS_PC } from '../../../mock'

const IndexPage = (): JSX.Element => {
  return (
    <>
      <WorksList list={WORKS_PC} />
    </>
  )
}

export default IndexPage
