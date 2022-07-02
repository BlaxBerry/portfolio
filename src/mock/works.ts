import { WorksItemType } from '../components/Pages/Works/WorksList'
import SAGA_SUNRISE_PARK from '../../public/images/examples/SAGA_SUNRISE_PARK.png'

const WORKS_PC: WorksItemType[] = [
  {
    id: 'pc-portfolio',
    title: {
      en: 'Portfólio',
      ja: 'ポートフォリオ',
      zh: 'Portfolio',
    },
    type: 'PC',
    skillsTags: [
      'typescript',
      'vite',
      'react',
      'react-material-ui',
      'react-router',
      'sass',
      'github',
      'yarn',
    ],
    modules: [
      'email.js',
      'animate.css',
      'react-chartjs-2',
      'react-i18next',
      'react-hook-form',
      'react-animation-on-scroll',
      'eslint',
      'stylelint',
      'prettier',
    ],
    images: [
      'https://github.com/BlaxBerry/blaxberry.github.io/raw/main/public/pics/home-main.png',
      'https://github.com/BlaxBerry/blaxberry.github.io/raw/main/public/pics/home-main.png',
      'https://github.com/BlaxBerry/blaxberry.github.io/raw/main/public/pics/home-main.png',
    ],
    createdAt: '2022-06',
    publishedAt: '',
    description: [],
  },

  {
    id: 'pc-vue-musicplayer',
    title: {
      en: 'Music Player',
      ja: 'ミュージックプレイヤ',
      zh: '音乐播放器',
    },
    type: 'PC',
    skillsTags: [
      'vue',
      'vue-vuex',
      'vue-vuetify',
      'vue-element-ui',
      'less',
      'axios',
      'npm',
    ],
    modules: [],
    images: [
      'https://github.com/BlaxBerry/vue-music-player/raw/master/public/images/search-album-01.png',
    ],
    createdAt: '2021-05',
    publishedAt: '',
    description: [],
  },

  {
    id: 'pc-vuepress-studynote',
    title: {
      en: 'Study Note',
      ja: 'スタディーノートサイト',
      zh: '学习笔记',
    },
    type: 'PC',
    skillsTags: ['vite', 'vue', 'vue-vuepress', 'npm'],
    modules: [],
    images: [
      'https://github.com/BlaxBerry/vuepress-studynotes/raw/main/images/01.png',
    ],
    createdAt: '2021-09',
    publishedAt: '',
    description: [],
  },

  {
    id: 'pc-SAGA_SUNRISE_PARK',
    title: {
      en: 'SAGA Sunrise Park Booking System',
      ja: 'SAGA Sunrise Park ボーキングシステム',
      zh: 'SAGA Sunrise Park 预约系统',
    },
    type: 'PC',
    skillsTags: [],
    modules: [],
    images: [SAGA_SUNRISE_PARK],
    createdAt: '2020-12',
    publishedAt: '',
    description: [],
  },
]

const WORKS_MOBILE: WorksItemType[] = []

const WORKS_ALL: WorksItemType[] = [...WORKS_PC, ...WORKS_MOBILE]

export { WORKS_PC, WORKS_MOBILE, WORKS_ALL }
