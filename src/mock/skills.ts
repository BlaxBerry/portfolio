import { SkillItemType } from '../components/Pages/Skills/SkillsList'
// front
import SVGHTML from '../assets/svg/front/html5.svg'
import SVGCSS from '../assets/svg/front/css3.svg'
import SVGSass from '../assets/svg/front/sass.svg'
import SVGLess from '../assets/svg/front/less.svg'
import SVGBootstrap from '../assets/svg/front/bootstrap.svg'
import SVGTailwind from '../assets/svg/front/tailwind.svg'
import SVGJavascript from '../assets/svg/front/javascript.svg'
import SVGTypescript from '../assets/svg/front/typescript.svg'
import SVGDart from '../assets/svg/front/dart.svg'
import SVGjQuery from '../assets/svg/front/jquery.svg'
import SVGjQueryMobile from '../assets/svg/front/jquery-mobile.svg'
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
import SVGNext from '../assets/svg/front/react-next.svg'
import SVGReactRouter from '../assets/svg/front/react-router.svg'
import SVGRedux from '../assets/svg/front/react-redux.svg'
import SVGReactQuery from '../assets/svg/front/react-query.svg'
import SVGVueX from '../assets/svg/front/vue-vuex.svg'
import SVGPinia from '../assets/svg/front/vue-pinia.svg'
import SVGElementUI from '../assets/svg/front/vue-element-ui.svg'
import SVGVuetify from '../assets/svg/front/vue-vuetify.svg'
import SVGNuxt from '../assets/svg/front/vue-nuxt.svg'
import SVGVuePress from '../assets/svg/front/vue-vuepress.svg'
import SVGNpm from '../assets/svg/front/npm.svg'
import SVGYarn from '../assets/svg/front/yarn.svg'
import SVGApollo from '../assets/svg/front/apollo.svg'
import SVGStorybook from '../assets/svg/front/storybook.svg'

// back
import SVGPython from '../assets/svg/back/python.svg'
import SVGDjango from '../assets/svg/back/python-django.svg'
import SVGPip from '../assets/svg/back/python-pip.svg'
import SVGRuby from '../assets/svg/back/ruby.svg'
import SVGRubyOnRails from '../assets/svg/back/ruby-on-rails.svg'
import SVGGem from '../assets/svg/back/ruby-gem.svg'
import SVGPHP from '../assets/svg/back/php.svg'
import SVGNodejs from '../assets/svg/back/nodejs.svg'
import SVGExpress from '../assets/svg/back/nodejs-express.svg'
import SVGKoa from '../assets/svg/back/nodejs-koa.svg'
import SVGMongoDB from '../assets/svg/back/mongodb.svg'

// others
import SVGGraphql from '../assets/svg/others/graphql.svg'
import SVGAxios from '../assets/svg/others/axios.svg'
import SVGGit from '../assets/svg/others/git.svg'
import SVGGithub from '../assets/svg/others/github.svg'
import SVGVSCode from '../assets/svg/others/vscode.svg'
import SVGDocker from '../assets/svg/others/docker.svg'
import SVGAuth0 from '../assets/svg/others/auth0.svg'

// designs
import SVGAdobeXD from '../assets/svg/designs/adobe-xd.svg'
import SVGAdobePS from '../assets/svg/designs/adobe-ps.svg'
import SVGAdobeAI from '../assets/svg/designs/adobe-ai.svg'
import SVGAdobePR from '../assets/svg/designs/adobe-pr.svg'
import SVGSketch from '../assets/svg/designs/sketch.svg'
import SVGBlender from '../assets/svg/designs/blender.svg'
import SVGMaya from '../assets/svg/designs/maya.svg'

const SKILLS_FRONT: SkillItemType[] = [
  {
    id: 'html',
    name: 'HTML 5',
    img: SVGHTML,
    extraInfo: {
      show: true,
      preparing: false,
      description: null,
    },
  },
  {
    id: 'css',
    name: 'CSS 3',
    img: SVGCSS,
    extraInfo: {
      show: true,
      preparing: false,
      description: null,
      relations: ['sass', 'less', 'tailwind', 'bootstrap'],
    },
  },
  {
    id: 'javascript',
    name: 'Javascript',
    img: SVGJavascript,
    extraInfo: {
      show: true,
      preparing: false,
      description: null,
    },
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    img: SVGTypescript,
    extraInfo: {
      show: true,
      preparing: false,
      description: null,
    },
  },
  {
    id: 'jquery',
    name: 'jQuery',
    img: SVGjQuery,
    extraInfo: {
      show: true,
      preparing: false,
      description: null,
    },
  },
  {
    id: 'jquery-mobile',
    name: 'jQuery Mobiel',
    img: SVGjQueryMobile,
    extraInfo: {
      show: true,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'webpack',
    name: 'Webpack',
    img: SVGWebpack,
    extraInfo: {
      show: true,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'vite',
    name: 'Vite',
    img: SVGVite,
    extraInfo: {
      show: true,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'react',
    name: 'React',
    img: SVGReact,
    extraInfo: {
      show: true,
      preparing: false,
      description: null,
      relations: [
        'react-create-react-app',
        'react-gatsby',
        'react-docusaurus',
        'react-next',
        'react-router',
        'react-redux',
        'react-ant-design',
        'react-material-ui',
        'react-query',
        'apollo',
        'storybook',
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
      description: null,
      relations: [
        'vue-cli',
        'vue-nuxt',
        'vue-vuepress',
        'vue-vuex',
        'vue-pinia',
        'vue-vuetify',
        'vue-element-ui',
        'apollo',
        'storybook',
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
      description: null,
    },
  },
  {
    id: 'sass',
    name: 'Sass',
    img: SVGSass,
    extraInfo: {
      show: true,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'electron',
    name: 'Electron',
    img: SVGElectron,
    extraInfo: {
      show: true,
      preparing: true,
      description: null,
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
  // 仅作为 relations skills 不展示在 skills page
  {
    id: 'less',
    name: 'Less',
    img: SVGLess,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    img: SVGBootstrap,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'tailwind',
    name: 'Tailwind',
    img: SVGTailwind,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'react-ant-design',
    name: 'Ant Design',
    img: SVGAntDesign,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'react-material-ui',
    name: 'Material UI',
    img: SVGMaterialUI,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'react-redux',
    name: 'Redux',
    img: SVGRedux,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'react-router',
    name: 'React Router',
    img: SVGReactRouter,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'react-create-react-app',
    name: 'Create React App',
    img: SVGCreateReactApp,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'react-gatsby',
    name: 'Gatsby',
    img: SVGGatsby,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'react-docusaurus',
    name: 'Docusaurus',
    img: SVGDocusaurus,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'react-query',
    name: 'React Query',
    img: SVGReactQuery,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'react-next',
    name: 'Next',
    img: SVGNext,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'vue-cli',
    name: 'Vue Cli',
    img: SVGVue,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'vue-vuex',
    name: 'Vuex',
    img: SVGVueX,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'vue-pinia',
    name: 'Pinia',
    img: SVGPinia,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'vue-element-ui',
    name: 'Element UI',
    img: SVGElementUI,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'vue-vuetify',
    name: 'Vuetify',
    img: SVGVuetify,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'vue-vuepress',
    name: 'VuePress',
    img: SVGVuePress,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
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
  {
    id: 'npm',
    name: 'npm',
    img: SVGNpm,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'yarn',
    name: 'yarn',
    img: SVGYarn,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'storybook',
    name: 'Storybook',
    img: SVGStorybook,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'apollo',
    name: 'Apollo',
    img: SVGApollo,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
]

const SKILLS_BACK: SkillItemType[] = [
  {
    id: 'nodejs',
    name: 'Node.js',
    img: SVGNodejs,
    extraInfo: {
      show: true,
      preparing: false,
      relations: ['nodejs-express', 'nodejs-koa', 'npm', 'yarn'],
      description: null,
    },
  },
  {
    id: 'python',
    name: 'Python',
    img: SVGPython,
    extraInfo: {
      show: true,
      preparing: false,
      description: null,
      relations: ['python-django', 'python-pip'],
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
      relations: ['ruby-on-rails', 'ruby-gem'],
    },
  },
  {
    id: 'php',
    name: 'PHP',
    img: SVGPHP,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'mongodb',
    name: 'Mongodb',
    img: SVGMongoDB,
    extraInfo: {
      show: true,
      preparing: true,
      description: null,
    },
  },
  // 仅作为 relations skills 不展示在 skills page
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
  {
    id: 'python-django',
    name: 'Django',
    img: SVGDjango,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'python-pip',
    name: 'Pip',
    img: SVGPip,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'ruby-on-rails',
    name: 'Ruby on Rails',
    img: SVGRubyOnRails,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'ruby-gem',
    name: 'Gem',
    img: SVGGem,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
]

const SKILLS_OTHERS: SkillItemType[] = [
  {
    id: 'graphql',
    name: 'Graphql',
    img: SVGGraphql,
    extraInfo: {
      show: true,
      preparing: false,
      description: null,
      relations: ['apollo', 'axios'],
    },
  },
  {
    id: 'git',
    name: 'Git',
    img: SVGGit,
    extraInfo: {
      show: true,
      preparing: false,
      description: null,
      relations: ['github'],
    },
  },
  {
    id: 'github',
    name: 'Github',
    img: SVGGithub,
    extraInfo: {
      show: true,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'vscode',
    name: 'VSCode',
    img: SVGVSCode,
    extraInfo: {
      show: true,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'docker',
    name: 'Docker',
    img: SVGDocker,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  {
    id: 'auth0',
    name: 'Auth0',
    img: SVGAuth0,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
  // 仅作为 relations skills 不展示在 skills page
  {
    id: 'axios',
    name: 'Axios',
    img: SVGAxios,
    extraInfo: {
      show: false,
      preparing: true,
      description: null,
    },
  },
]

const SKILLS_DESIGNS: SkillItemType[] = [
  {
    id: 'sketch',
    name: 'Sketch',
    img: SVGSketch,
    extraInfo: {
      show: true,
      preparing: true,
      description: null,
    },
  },
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
    id: 'maya',
    name: 'Mayar',
    img: SVGMaya,
    extraInfo: {
      show: false,
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
  ...SKILLS_DESIGNS,
]

export { SKILLS_FRONT, SKILLS_BACK, SKILLS_OTHERS, SKILLS_DESIGNS, ALL_SKILLS }
