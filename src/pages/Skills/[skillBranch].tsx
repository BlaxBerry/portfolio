import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { skillsChildrenRoute } from '../../components/Routes/RouterView'

// type CustomState = { skillBranch: string }

const IndexPage = (): JSX.Element => {
  const naviagte = useNavigate()
  const location = useLocation()
  //   const state = location.state as CustomState
  const skillBranch = location.pathname.slice(
    location.pathname.lastIndexOf('/') + 1
  )

  // 为经过 Tab 而是直接访问该页面的场合
  useEffect(() => {
    if (!skillsChildrenRoute.includes(skillBranch)) {
      naviagte(`/skills/${skillsChildrenRoute[0]}`, { replace: true })
    }
  }, [skillBranch, naviagte])

  return <>{skillBranch}</>
}

export default IndexPage
