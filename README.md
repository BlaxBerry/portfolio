# Portfolio

## Tech Stacks

- [Astro]() v4
- [TypeScript]() v5
- [TailwindCSS]() v3

## Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── ...
├── src/
│   ├── __mocks__
│   ├── assets
│   ├── components/
│   │   ├── astro/
│   │   │   └── *.astro
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       ├── *.astro
│       └── index.astro
├── astro.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── ...
```

## Commands

```shell
yarn install        # Installs dependencies
yarn dev            # Starts local dev server at localhost:4321
yarn build          # Build your production site to ./dist/
yarn preview        # Preview your build locally, before deploying
yarn astro check    # Check your project for errors.
yarn astro --help   # Show astro commands

yarn prettier       # prettier format
```
