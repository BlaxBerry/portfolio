import React, { useLayoutEffect } from 'react'
import { useRoutes, useLocation, Navigate } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import PieChartIcon from '@material-ui/icons/PieChart'
import PaletteIcon from '@material-ui/icons/Palette'
// router view pages
import Home from '../../pages/home'
import About from '../../pages/about'
import NotFound from '../../pages/404'
import Skills from '../../pages/Skills'
import SkillBranch from '../../pages/Skills/[skillBranch]'
import Works from '../../pages/Works'
import WorksPC from '../../pages/Works/WorksPC'
import WorksMobile from '../../pages/Works/WorksMobile'
import DetailSkill from '../../pages/Detail/Skill/[ID]'
import DetailWork from '../../pages/Detail/Work/[ID]'

export interface NavigationItemType {
  to: string
  icon: JSX.Element
  title: string
}

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
        { path: ':skillBranch', element: <SkillBranch /> },
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
    { path: '/', element: <Home /> },
    { path: '*', element: <NotFound /> },
  ])

  return <> {routesElements} </>
}

export default RouterView

// navbar 路由导航链接
// TODO: 移出该文件单独存放
export const navigationItems: Array<NavigationItemType> = [
  {
    to: '/home',
    icon: <HomeIcon />,
    title: 'Home',
  },
  {
    to: '/skills',
    icon: <PieChartIcon />,
    title: 'Skills',
  },
  {
    to: '/works',
    icon: <PaletteIcon />,
    title: 'Works',
  },
  // {
  //     to: '/about',
  //     icon: <HelpOutlineIcon />,
  //     title: 'About',
  // }
]
