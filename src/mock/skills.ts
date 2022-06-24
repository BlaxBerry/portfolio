import { SkillItemType } from '../components/Pages/Skills/SkillsList'
// front
import SVGHTML from '../assets/svg/front/html5.svg'
import SVGCSS from '../assets/svg/front/css3.svg'
import SVGSass from '../assets/svg/front/sass.svg'
import SVGJavascript from '../assets/svg/front/javascript.svg'
import SVGTypescript from '../assets/svg/front/typescript.svg'
import SVGDart from '../assets/svg/front/dart.svg'
import SVGjQuery from '../assets/svg/front/jquery.svg'
import SVGAngular from '../assets/svg/front/angular.svg'
import SVGVue from '../assets/svg/front/vue.svg'
import SVGReact from '../assets/svg/front/react.svg'
import SVGWebpack from '../assets/svg/front/webpack.svg'
import SVGVite from '../assets/svg/front/vite.svg'
import SVGElectron from '../assets/svg/front/electron.svg'
import SVGFlutter from '../assets/svg/front/flutter.svg'
import SVGAntDesign from '../assets/svg/front/react-ant-design.svg'
import SVGMaterialUI from '../assets/svg/front/react-material-ui.svg'
import SVGCreateReactApp from '../assets/svg/front/react-create-react-app.svg'
import SVGGatsby from '../assets/svg/front/react-gatsby.svg'
import SVGDocusaurus from '../assets/svg/front/react-docusaurus.svg'
import SVGReactRouter from '../assets/svg/front/react-router.svg'
import SVGRedux from '../assets/svg/front/react-redux.svg'
import SVGVueX from '../assets/svg/front/vue-vuex.svg'
import SVGPinia from '../assets/svg/front/vue-pinia.svg'
import SVGElementUI from '../assets/svg/front/vue-element-ui.svg'
import SVGVuetify from '../assets/svg/front/vue-vuetify.svg'
import SVGNuxt from '../assets/svg/front/vue-nuxt.svg'
import SVGVuePress from '../assets/svg/front/vue-vuepress.svg'

// back
import SVGPython from '../assets/svg/back/python.svg'
import SVGRuby from '../assets/svg/back/ruby.svg'
import SVGNodejs from '../assets/svg/back/nodejs.svg'
import SVGExpress from '../assets/svg/back/nodejs-express.svg'
import SVGKoa from '../assets/svg/back/nodejs-koa.svg'

// others
import SVGAdobeXD from '../assets/svg/others/adobe-xd.svg'
import SVGAdobePS from '../assets/svg/others/adobe-ps.svg'
import SVGAdobeAI from '../assets/svg/others/adobe-ai.svg'
import SVGAdobePR from '../assets/svg/others/adobe-pr.svg'
import SVGBlender from '../assets/svg/others/blender.svg'

const SKILLS_FRONT: SkillItemType[] = [
  {
    id: 'html',
    name: 'HTML 5',
    img: SVGHTML,
    extraInfo: {
      show: true,
      preparing: false,
      description: '...',
    },
  },
  {
    id: 'css',
    name: 'CSS 3',
    img: SVGCSS,
    extraInfo: {
      show: true,
      preparing: false,
      description: '...',
    },
  },
  {
    id: 'javascript',
    name: 'Javascript',
    img: SVGJavascript,
    extraInfo: {
      show: true,
      preparing: false,
      description: '...',
    },
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    img: SVGTypescript,
    extraInfo: {
      show: true,
      preparing: false,
      description: '...',
    },
  },
  {
    id: 'jquery',
    name: 'jQuery',
    img: SVGjQuery,
    extraInfo: {
      show: true,
      preparing: false,
      description: '...',
    },
  },
  {
    id: 'react',
    name: 'React',
    img: SVGReact,
    extraInfo: {
      show: true,
      preparing: false,
      description: '...',
      relations: [
        'react-ant-design',
        'react-create-react-app',
        'react-docusaurus',
        'react-gatsby',
        'react-material-ui',
        'react-redux',
        'react-router',
      ],
    },
  },
  {
    id: 'vue',
    name: 'Vue',
    img: SVGVue,
    extraInfo: {
      show: true,
      preparing: false,
      description: '...',
      relations: [
        'vue-element-ui',
        'vue-nuxt',
        'vue-pinia',
        'vue-vuepress',
        'vue-vuetify',
        'vue-vuex',
      ],
    },
  },
  {
    id: 'angular',
    name: 'Angular',
    img: SVGAngular,
    extraInfo: {
      show: true,
      preparing: true,
      description: '...',
    },
  },
  {
    id: 'webpack',
    name: 'Webpack',
    img: SVGWebpack,
    extraInfo: {
      show: true,
      preparing: true,
      description: '...',
    },
  },
  {
    id: 'vite',
    name: 'Vite',
    img: SVGVite,
    extraInfo: {
      show: true,
      preparing: true,
      description: '...',
    },
  },
  {
    id: 'sass',
    name: 'Sass',
    img: SVGSass,
    extraInfo: {
      show: true,
      preparing: true,
      description: '...',
    },
  },
  {
    id: 'electron',
    name: 'Electron',
    img: SVGElectron,
    extraInfo: {
      show: true,
      preparing: true,
      description: '...',
    },
  },
  {
    id: 'dart',
    name: 'Dart',
    img: SVGDart,
    extraInfo: {
      show: true,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'flutter',
    name: 'Flutter',
    img: SVGFlutter,
    extraInfo: {
      show: true,
      preparing: true,
      description: null,
    },
  },
  // relations skills 不展示在 skills page
  {
    id: 'react-ant-design',
    name: 'Ant Design',
    img: SVGAntDesign,
    extraInfo: {
      show: false,
      preparing: true,
      description: '...',
    },
  },
  {
    id: 'react-material-ui',
    name: 'Material UI',
    img: SVGMaterialUI,
    extraInfo: {
      show: false,
      preparing: true,
      description: '...',
    },
  },
  {
    id: 'react-redux',
    name: 'Redux',
    img: SVGRedux,
    extraInfo: {
      show: false,
      preparing: true,
      description: '...',
    },
  },
  {
    id: 'react-router',
    name: 'React Router',
    img: SVGReactRouter,
    extraInfo: {
      show: false,
      preparing: true,
      description: '...',
    },
  },
  {
    id: 'react-create-react-app',
    name: 'Create React App',
    img: SVGCreateReactApp,
    extraInfo: {
      show: false,
      preparing: true,
      description: '...',
    },
  },
  {
    id: 'react-gatsby',
    name: 'Gatsby',
    img: SVGGatsby,
    extraInfo: {
      show: false,
      preparing: true,
      description: '...',
    },
  },
  {
    id: 'react-docusaurus',
    name: 'Docusaurus',
    img: SVGDocusaurus,
    extraInfo: {
      show: false,
      preparing: true,
      description: '...',
    },
  },

  {
    id: 'vue-vuex',
    name: 'Vuex',
    img: SVGVueX,
    extraInfo: {
      show: false,
      preparing: true,
      description: '...',
    },
  },
  {
    id: 'vue-pinia',
    name: 'Pinia',
    img: SVGPinia,
    extraInfo: {
      show: false,
      preparing: true,
      description: '...',
    },
  },
  {
    id: 'vue-element-ui',
    name: 'Element UI',
    img: SVGElementUI,
    extraInfo: {
      show: false,
      preparing: true,
      description: '...',
    },
  },
  {
    id: 'vue-vuetify',
    name: 'Vuetify',
    img: SVGVuetify,
    extraInfo: {
      show: false,
      preparing: true,
      description: '...',
    },
  },
  {
    id: 'vue-vuepress',
    name: 'VuePress',
    img: SVGVuePress,
    extraInfo: {
      show: false,
      preparing: true,
      description: '...',
    },
  },
  {
    id: 'vue-nuxt',
    name: 'Nuxt',
    img: SVGNuxt,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
]
const SKILLS_BACK: SkillItemType[] = [
  {
    id: 'python',
    name: 'Python',
    img: SVGPython,
    extraInfo: {
      show: true,
      preparing: false,
      description: null,
    },
  },
  {
    id: 'ruby',
    name: 'Ruby',
    img: SVGRuby,
    extraInfo: {
      show: true,
      preparing: false,
      description: null,
    },
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    img: SVGNodejs,
    extraInfo: {
      show: true,
      preparing: false,
      relations: ['nodejs-express', 'nodejs-koa'],
      description: '...',
    },
  },
  // relations skills 不展示在 skills page
  {
    id: 'nodejs-express',
    name: 'Express',
    img: SVGExpress,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'nodejs-koa',
    name: 'Koa',
    img: SVGKoa,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
]

const SKILLS_OTHERS: SkillItemType[] = [
  {
    id: 'adobe-xd',
    name: 'Adobe XD',
    img: SVGAdobeXD,
    extraInfo: {
      show: true,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'adobe-ps',
    name: 'Adobe Photoshop',
    img: SVGAdobePS,
    extraInfo: {
      show: true,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'adobe-ai',
    name: 'Adobe Illustrator',
    img: SVGAdobeAI,
    extraInfo: {
      show: true,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'adobe-pr',
    name: 'Adobe Premiere',
    img: SVGAdobePR,
    extraInfo: {
      show: true,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'blender',
    name: 'Blender',
    img: SVGBlender,
    extraInfo: {
      show: true,
      preparing: true,
      description: null,
    },
  },
]

const ALL_SKILLS: SkillItemType[] = [
  ...SKILLS_FRONT,
  ...SKILLS_BACK,
  ...SKILLS_OTHERS,
]

export { SKILLS_FRONT, SKILLS_BACK, SKILLS_OTHERS, ALL_SKILLS }
