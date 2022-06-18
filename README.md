# Portfolio

- [Tech Stacks](#tech-stacks)
- [Folder](#folder)
- [Description](#description)
- [Developement](#developement)
- [Pages & Images](#pages--images)

<br/>

## Tech Stacks

- created by

  - [Vite]() v2.9+
  - [yarn]()
  - [TypeScript]() v4.6+
  - [React]() v18
  - [React-Router-Dom]() v6

- state mangement

  - > [Redux]() ?

- styles

  - [Material UI]() v4
  - > [Sass]() ?
  - > [Tailwind]() ?

- date request

  - > [Graphql]() ?
  - > [Axios]() ?

- document ?

  - > [Storybook]() ?

- linter

  - > [prettier]()
  - > [eslint]()
  - > [stylelint]()

<br/>

## Folder

mian folder :

```js
|- docs // build outDir, github pages source
|- pubilc  // static files
|- src
    |- assets
    |- components
        |- common
        |- Layout
        |- Pages
        |- Routes  // route view and route elements
        |- ...
    |- configs
    |- hooks  // custom hooks
    |- locales  // i18next
    |- pages
        |- About
        |- Detail
        |- Skills
        |- Works
        |- 404.tsx
        |- Home.tsx
        |- ...
    |- styles
        |- common  // common className and Sass variables
        |- automs  // basic sample elements' style
        |- molecules  // custom sample components' style
        |- pages  // each page itself style
        |- ...
    |- App.tsx
    |- index.tsx
|- package.json
|- tsconfig.json
|- vite.config.ts
|- ...
```

<br/>

## Description

ummmm ... as practice

still developing if not busy ....

<br/>

## Developement

### Setup

```bash
git lone https://github.com/BlaxBerry/portfolio.git
yarn
yarn run develop
```

### Git commit message

- feat: (feature)
- fix: (fix bugs)
- docs: (documents)
- style:
- pref:
- merge:
- revert:

### Update to github pages

```bash
yarn run build
yarn run preview
git add .
git cimmit -m "message"
git push
```

<br/>

## Design

emmm... use atomic design

```jsx
<p className="front-h3 front-red front-700">{variable}</p>

<div className="flex-justify-center flex-align-items-center">
  <span className="md-1 pt-2"></span>
  <span className="md-1 pd-2"></span>
  <span className="md-1 pr-2"></span>
</div>
```

- front [see more detail](./src/styles/atoms/atom-font.scss)

  - `.front-h{size-number}`
  - `.front-{weight-number}`
  - `.front-{color}`

- direction

  - > flex
    - > `.flex-justify-{direction}`
    - > `.flex-align-items-{direction}`
  - > grid

- box
  - > height
  - > width
  - > margin
  - > padding
  - > background

<br/>

## Pages & Images

## Routes

- `/portfolio/`
- `/portfolio/home`
- `/portfolio/about`
- `/portfolio/skills/front`
- `/portfolio/skills/back`
- `/portfolio/skill/:ID`
- `/portfolio/works/pc`
- `/portfolio/works/mobile`
- `/portfolio/work/:ID`
- `/portfolio/404`

<br/>
