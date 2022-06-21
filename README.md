# Portfolio

- [Description](#description)
- [Tech Stacks](#tech-stacks)
- [Folder](#folder)
- [Pages](#pages)
  - [Routes](#routes)
  - [Images](#Images)
- [Design](#design)
- [Developement](#developement)
  - [Setup](#setup)
  - [Git commit message](#git-commit-message)
  - [Update to github pages](#update-to-github-pages)

<br/>

## Description

ummmm ... as practice

still developing if not busy ....

<br/>

## Tech Stacks

- created by

  - [Vite]() v2.9+
  - [TypeScript]() v4.6+
  - [React]() v18
  - [React-Router-Dom]() v6

- package & version manager

  - [yarn]()
  - [git]()

- state mangement

  - > [Redux]() ?

- style and design

  - [Material UI]() v4
  - [Sass]()

- date request

  - > [Graphql]() ?
  - > [Axios]() ?

- linter & format

  - [prettier]()
  - [eslint]()
  - [stylelint]()

- document ?

  - > [Storybook]() ?

<br/>

## Folder

```js
|- docs // build outDir, github pages source
|- pubilc  // static files
|- src
    |- assets
        |- svg  // peronal skills' images
    |- components
        |- common
        |- Layout
        |- Pages  // each page's (router view) components
        |- Routes  // route view and route elements
        |- ...
    |- configs
    |- hooks  // custom hooks
    |- locales  // i18next
    |- mock  // mock data
    |- pages
        |- Detail
        |- Skills
        |- Works
        |- 404.tsx
        |- About.tsx
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
|- tsconfig.node.json  // vite's ts
|- vite.config.ts
|- ...
```

<br/>

## Pages

### Routes

- `/portfolio/`
- `/portfolio/home`
- > `/portfolio/about` ?
- `/portfolio/skills/front`
- `/portfolio/skills/back`
- `/portfolio/skill/:ID`
- `/portfolio/works/pc`
- `/portfolio/works/mobile`
- `/portfolio/work/:ID`
- `/portfolio/404`

### Images

TODO:

<br/>

## Design

emmm... use atomic design style

for example:

```jsx
<p className="example-p text-align-center front-h3 front-red front-700">
  {variable}
</p>
```

```scss
p.example-p {
  color: red;
  font-size: 18.72px; // equal <h3> title element
  font-weight: 700;
  text-align: center;
}
```

- front & text

  - `.front-h{size-number}`
  - `.front-{weight-number}`
  - `.front-{color}`
  - `.text-align-{direction}`

[more detail →](./src/styles/atoms/index.scss)

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
yarn run preview  # boot up local static web server that serves the files from docs at http://localhost:4173 .

git add .
git cimmit -m "description message"
git push
```

For this project, after `yarn run build`, the build directory `docs` is created/updated. And GitHub Pages site is built from the `/docs` folder in the main branch. [check project folder](#folder)

```js
<myGithubName>.github.io
  |- portfolio
      |- assets
      |- Images
      |- ...
      |- index.html
```

<br/>
