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

  return (
    <>
      <div>
        <Link to={'/home'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/skills'}>Skills</Link>
        <Link to={'/works'}>Works</Link>
      </div>
      <div>{routesElement}</div>
    </>
  )
}
