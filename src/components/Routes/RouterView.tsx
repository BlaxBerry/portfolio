import React from "react"
import { useRoutes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import NotFound from "../../pages/404";
import Skills from "../../pages/Skills/index"
import SkillsFront from "../../pages/Skills/SkillsFront"
import SkillsBack from "../../pages/Skills/SkillsBack"
import Works from "../../pages/Works/index"
import WorksPC from "../../pages/Works/WorksPC"
import WorksMobile from "../../pages/Works/WorksMobile"
import DetailSkill from "../../pages/Detail/Skill/[ID]"
import DetailWork from "../../pages/Detail/Work/[ID]"

import HomeIcon from '@material-ui/icons/Home';
import PieChartIcon from '@material-ui/icons/PieChart';
import PaletteIcon from '@material-ui/icons/Palette';

export interface NavigationItemType {
    to: string
    icon: JSX.Element,
    title: string,
}

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

const RouterView = () => {
    
    const routesElements = useRoutes([
        {
            path: "/skills",
            element: <Skills />,
            children: [
                { index: true, element: <SkillsFront /> },
                { path: "front", element: <SkillsFront /> },
                { path: "back", element: <SkillsBack /> },
            ],
        },
        {
            path: "/works",
            element: <Works />,
            children: [
                { index: true, element: <WorksPC /> },
                { path: "pc", element: <WorksPC /> },
                { path: "mobile", element: <WorksMobile /> },
            ],
        },
        { path: "/skill/:ID", element: <DetailSkill /> },
        { path: "/work/:ID", element: <DetailWork /> },
        { path: "/about", element: <About /> },
        { path: "/home", element: <Home /> },
        { path: "/", element: <Home /> },
        { path: "*", element: <NotFound /> },
    ]);


    return <> {routesElements}  </>
}

export default RouterView