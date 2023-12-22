import imgNodejs from "@assets/images/skills/nodejs.svg";
import imgTypescript from "@assets/images/skills/typescript.svg";
import imgPython from "@assets/images/skills/python.svg";
import imgGolang from "@assets/images/skills/go.svg";
import imgCSharp from "@assets/images/skills/c-sharp.svg";
import imgReact from "@assets/images/skills/react.svg";
import imgVue from "@assets/images/skills/vue.svg";
import imgSvelte from "@assets/images/skills/svelte.svg";
import imgGatsby from "@assets/images/skills/gatsby.svg";
import imgAstro from "@assets/images/skills/astro.svg";
import imgDjango from "@assets/images/skills/django.svg";
import imgGin from "@assets/images/skills/gin.svg";
import imgFirebase from "@assets/images/skills/firebase.svg";
import imgGraphql from "@assets/images/skills/graphql.svg";

export type Skill = {
  id: string;
  img: ImageMetadata;
};

const LANGUAGES_LIST: Array<Skill> = [
  { id: "nodejs", img: imgNodejs },
  { id: "typescript", img: imgTypescript },
  { id: "python", img: imgPython },
  { id: "go", img: imgGolang },
];
const FRAMEWORKS_LIST: Array<Skill> = [
  { id: "react", img: imgReact },
  { id: "vue", img: imgVue },
  { id: "svelte", img: imgSvelte },
  { id: "gatsby", img: imgGatsby },
  { id: "astro", img: imgAstro },
  { id: "django", img: imgDjango },
  { id: "gin", img: imgGin },
];
const DEVOPS_LIST: Array<Skill> = [{ id: "firebase", img: imgFirebase }];
const OTHERS_LIST: Array<Skill> = [{ id: "graphql", img: imgGraphql }];

export const SKILLS_LIST = {
  LANGUAGES: LANGUAGES_LIST,
  FRAMEWORKS: FRAMEWORKS_LIST,
  DEVOPS: DEVOPS_LIST,
  OTHERS: OTHERS_LIST,
  ALL: [
    ...LANGUAGES_LIST,
    ...FRAMEWORKS_LIST,
    ...DEVOPS_LIST,
    ...OTHERS_LIST,
    { id: "c-sharp", img: imgCSharp },
  ],
};
