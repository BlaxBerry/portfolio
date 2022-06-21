import { SkillItemType } from '../components/Pages/Skills/SkillsList'
// front
import SVGHTML from '../assets/svg/front/html5.svg'
import SVGCSS from '../assets/svg/front/css3.svg'
import SVGJavascript from '../assets/svg/front/javascript.svg'
import SVGTypescript from '../assets/svg/front/typescript.svg'
import SVGjQuery from '../assets/svg/front/jquery.svg'
import SVGVue from '../assets/svg/front/vue.svg'
import SVGReact from '../assets/svg/front/react.svg'
import SVGWebpack from '../assets/svg/front/webpack.svg'
import SVGVite from '../assets/svg/front/vite.svg'
import SVGElectron from '../assets/svg/front/electron.svg'
// back
import SVGPython from '../assets/svg/back/python.svg'
import SVGRuby from '../assets/svg/back/ruby.svg'
import SVGNodejs from '../assets/svg/back/nodejs.svg'
// others
import SVGAdobeXD from '../assets/svg/others/adobe-xd.svg'
import SVGAdobePS from '../assets/svg/others/adobe-ps.svg'
import SVGAdobeAI from '../assets/svg/others/adobe-ai.svg'
import SVGAdobePR from '../assets/svg/others/adobe-pr.svg'

const SKILLS_FRONT: SkillItemType[] = [
  {
    id: 'html',
    name: 'HTML 5',
    img: SVGHTML,
    extraInfo: {},
  },
  {
    id: 'css',
    name: 'CSS 3',
    img: SVGCSS,
    extraInfo: {},
  },
  {
    id: 'javascript',
    name: 'Javascript',
    img: SVGJavascript,
    extraInfo: {},
  },
  {
    id: 'typescript',
    name: 'TypeScriptt',
    img: SVGTypescript,
    extraInfo: {},
  },
  {
    id: 'jquery',
    name: 'jQuery',
    img: SVGjQuery,
    extraInfo: {},
  },
  {
    id: 'vue',
    name: 'Vue',
    img: SVGVue,
    extraInfo: {},
  },
  {
    id: 'react',
    name: 'React',
    img: SVGReact,
    extraInfo: {},
  },
  {
    id: 'webpack',
    name: 'Webpack',
    img: SVGWebpack,
    extraInfo: {},
  },
  {
    id: 'vite',
    name: 'Vite',
    img: SVGVite,
    extraInfo: {},
  },
  {
    id: 'electron',
    name: 'Electron',
    img: SVGElectron,
    extraInfo: {},
  },
]
const SKILLS_BACK: SkillItemType[] = [
  {
    id: 'python',
    name: 'Python',
    img: SVGPython,
    extraInfo: {},
  },
  {
    id: 'ruby',
    name: 'Ruby',
    img: SVGRuby,
    extraInfo: {},
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    img: SVGNodejs,
    extraInfo: {},
  },
]

const SKILLS_OTHERS: SkillItemType[] = [
  {
    id: 'adobe-xd',
    name: 'Adobe XD',
    img: SVGAdobeXD,
    extraInfo: {},
  },
  {
    id: 'adobe-ps',
    name: 'Adobe Photoshop',
    img: SVGAdobePS,
    extraInfo: {},
  },
  {
    id: 'adobe-ai',
    name: 'Adobe Illustrator',
    img: SVGAdobeAI,
    extraInfo: {},
  },
  {
    id: 'adobe-pr',
    name: 'Adobe Premiere',
    img: SVGAdobePR,
    extraInfo: {},
  },
]

const ALL_SKILLS: SkillItemType[] = [
  ...SKILLS_FRONT,
  ...SKILLS_BACK,
  ...SKILLS_OTHERS,
]

export { SKILLS_FRONT, SKILLS_BACK, SKILLS_OTHERS, ALL_SKILLS }
