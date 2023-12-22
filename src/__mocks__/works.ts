import type { Skill } from "./skills";
import FNI_SUNRISE_PARK_01 from "@assets/images/works/fni_sunrise_park/01.webp";
import FNI_SUNRISE_PARK_02 from "@assets/images/works/fni_sunrise_park/02.webp";
import FNI_RANKING_MASTER_01 from "@assets/images/works/fni_ranking_master/01.webp";
import FNI_RANKING_MASTER_02 from "@assets/images/works/fni_ranking_master/02.webp";
import SKYFALL_SKYFALG_01 from "@assets/images/works/skyfall_skyfalg/01.webp";

export type Work = {
  id: string;
  name: string;
  date: string;
  imgs: Array<ImageMetadata>;
  description: string;
  link: string;
  skillIDs: Array<Skill["id"]>;
};

// GENIEE
const GENIEE_CHAMO: Work = {
  id: "geniee_chamo",
  name: "Web CS Platform",
  date: "2023/08 ~  ",
  imgs: [],
  description:
    "GENIEE's CHAMO CHAT is a chat-type web customer service platform. It has a complete set of functions such as user visualization and automatic conversation, and branches the next chat content depending on the user's answer, automating some of the responses.",
  skillIDs: ["react", "typescript", "django", "gin", "nodejs"],
  link: "https://chamo-chat.com/",
};

// SKYFALL
const SKYFALL_SKYFALG: Work = {
  id: "skyfall_skyfalg",
  name: "AD Monetization Platform",
  date: "2023/03 ~ 2023/07",
  imgs: [SKYFALL_SKYFALG_01],
  description:
    "SKYFLAG is an advertising monetization tool that supports business growth. The system provides users with options that meet their needs, and generates advertising revenue if the user makes a selection.",
  skillIDs: ["react", "typescript", "c-sharp"],
  link: "https://skyflag.info/",
};

// FNI
const FNI_RANKING_MASTER: Work = {
  id: "fni_ranking_master",
  name: "Online Voting System",
  date: "2022/12 ~ 2023/2",
  imgs: [FNI_RANKING_MASTER_01, FNI_RANKING_MASTER_02],
  description:
    "Ranking Master, a Web Voting System which is used for events such as the 『Kansai Collection』 and 『RIZIN』, allows users to vote online for the models and singers they would like to support to appear at each famous event.",
  skillIDs: ["react", "typescript", "firebase", "graphql"],
  link: "https://www.rankingmaster.jp/",
};
const FNI_SUNRISE_PARK: Work = {
  id: "fni_sunrise_park",
  name: "Facility Booking System",
  date: "2021/11 ~ 2022/12",
  imgs: [FNI_SUNRISE_PARK_01, FNI_SUNRISE_PARK_02],
  description:
    "SAGA Sunrise Park will become a place where possibilities and values ​​that go beyond preconceived notions will be created not only in sports, but also in various fields such as music and business. With the completion of SAGA Arena, one of the largest arenas in Kyushu.",
  skillIDs: ["react", "typescript", "gatsby", "graphql", "django"],
  link: "https://saga-sunrisepark.com/",
};

export const WORKS_LIST: Array<Work> = [
  GENIEE_CHAMO,
  SKYFALL_SKYFALG,
  FNI_RANKING_MASTER,
  FNI_SUNRISE_PARK,
];
