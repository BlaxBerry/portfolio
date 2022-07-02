import React, { useLayoutEffect } from 'react'
import { useRoutes, useLocation, Navigate } from 'react-router-dom'
// router view pages
import Home from '../../pages/home'
import About from '../../pages/about'
import NotFound from '../../pages/404'
import Skills from '../../pages/Skills'
import SkillBranch from '../../pages/Skills/[skillBranch]'
import Works from '../../pages/Works'
import WorksPC from '../../pages/Works/PC/WorksPC'
import WorksMobile from '../../pages/Works/Mobile/WorksMobile'
import DetailSkill from '../../pages/Detail/Skill/[ID]'
import DetailWork from '../../pages/Detail/Work/[ID]'
import Contact from '../../pages/contact'

// 默认子路由名
// TODO: 移出该文件单独存放
// /skills/{childRoute}
export const skillsChildrenRoute = ['front', 'back', 'others', 'design']
// /works/{childRoute}
export const worksChildrenRoute = ['pc', 'mobile']

const RouterView = () => {
  const location = useLocation()

  // Scroll To Top On Route Change
  useLayoutEffect(() => {
    const noScrollRoutes = [
      ...skillsChildrenRoute.map((item) => `/skills/${item}`),
      ...worksChildrenRoute.map((item) => `/works/${item}`),
    ]
    /** 不会回滚到页面顶部的路由名
     * /skills/front、/skills/back、/skills/others、/skills/design、
     * /works/pc、/works/mobile
     */
    if (!noScrollRoutes.includes(location.pathname)) {
      document.documentElement.scrollTo(0, 0)
    }
  }, [location.pathname])

  // 路由匹配规则
  const routesElements = useRoutes([
    {
      path: '/skills',
      element: <Skills />,
      children: [
        {
          index: true,
          element: <Navigate to={`/skills/${skillsChildrenRoute[0]}`} />,
        },
        // { path: ':skillBranch', element: <SkillBranch /> },
        ...skillsChildrenRoute.map((item) => ({
          path: `${item}`,
          element: <SkillBranch />,
        })),
      ],
    },
    {
      path: '/works',
      element: <Works />,
      children: [
        { index: true, element: <WorksPC /> },
        { path: 'pc', element: <WorksPC /> },
        { path: 'mobile', element: <WorksMobile /> },
      ],
    },
    { path: '/skill/:ID', element: <DetailSkill /> },
    { path: '/work/:ID', element: <DetailWork /> },
    { path: '/about', element: <About /> },
    { path: '/home', element: <Home /> },
    { path: '/contact', element: <Contact /> },
    { path: '/', element: <Navigate to={'/home'} /> },
    { path: '*', element: <NotFound /> },
  ])

  return <> {routesElements} </>
}

export default RouterView
