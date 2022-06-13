import { Link, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/404";
import Skills from "./pages/Skills/index"
import SkillsFront from "./pages/Skills/SkillsFront"
import SkillsBack from "./pages/Skills/SkillsBack"
import Works from "./pages/Works/index"
import WorksPC from "./pages/Works/WorksPC"
import WorksMobile from "./pages/Works/WorksMobile"
import DetailSkill from "./pages/Detail/Skill/[ID]"
import DetailWork from "./pages/Detail/Work/[ID]"

export default function App() {

  const routesElement = useRoutes([
    {
      path: "portfolio/skills",
      element: <Skills />,
      children: [
        { index: true, element: <SkillsFront /> },
        { path: "front", element: <SkillsFront /> },
        { path: "back", element: <SkillsBack /> },
      ],
    },
    {
      path: "portfolio/works",
      element: <Works />,
      children: [
        { index: true, element: <WorksPC /> },
        { path: "pc", element: <WorksPC /> },
        { path: "mobile", element: <WorksMobile /> },
      ],
    },
    { path: "portfolio/skill/:ID", element: <DetailSkill /> },
    { path: "portfolio/work/:ID", element: <DetailWork /> },
    { path: "portfolio/about", element: <About /> },
    { path: "portfolio/home", element: <Home /> },
    { path: "portfolio/", element: <Home /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
      <div>
        <Link to={'portfolio/home'}>Home</Link>
        <Link to={'portfolio/about'}>About</Link>
        <Link to={'portfolio/skills'}>Skills</Link>
        <Link to={'portfolio/works'}>Works</Link>
      </div>
      <div>{routesElement}</div>
    </>
  )
}
