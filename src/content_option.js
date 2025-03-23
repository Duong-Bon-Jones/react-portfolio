import quizeezImg from "./assets/images/quizeez.png";
import moviieeImg from "./assets/images/moviiee.png";
import huyhungImg from "./assets/images/huyhung.png";
import moshifyImg from "./assets/images/moshify.png";

const logotext = "Duong Pham";
const meta = {
  title: "Duong Pham",
  description:
    "I’m Duong Pham, senior front end engineer, currently working in Hanoi, Vietnam",
};

const introdata = {
  title: "I’m Duong Pham",
  animated: {
    first: "I love coding",
    second: "I code cool websites",
  },
  description:
    "I’m Duong Pham, senior front end engineer, currently working in Hanoi, Vietnam",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "abit about my self",
  aboutme:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [
  {
    jobtitle: " Fresher Frontend Software Engineer",
    where: "FPT Software (Vietnam)",
    date: "5/2016 - 5/2017",
  },
  {
    jobtitle: "Middle Frontend Software Engineer",
    where: "Tulpo Software (Vietnam)",
    date: "6/2017 - 8/2019",
  },
  {
    jobtitle: "Senior Frontend Software Engineer (full-time remote)",
    where: "NTUC (Singapore)",
    date: "9/2019 - 11/2021",
  },
  {
    jobtitle: "Senior Frontend Software Engineer (full-time remote)",
    where: "Carro (Singapore)",
    date: "12/2021 - current",
  },
];

const skills = [
  {
    name: "JavaScript, TypeScript",
    value: 90,
  },
  {
    name: "HTML, CSS, Sass",
    value: 90,
  },
  {
    name: "ReactJs, NextJs, Svelte",
    value: 90,
  },
  {
    name: "State management frameworks: Redux, Zustand, ... ",
    value: 90,
  },
  {
    name: "GTM tracking, GPT ads integration",
    value: 80,
  },
  {
    name: "UI frameworks: Material UI, AntD, Tailwind, …",
    value: 80,
  },
  {
    name: "Front-end testing libraries: Cypress, Jest, …",
    value: 70,
  },
  {
    name: "React Native",
    value: 70,
  },
  {
    name: "ChatGPT, Github Copilot, ClaudeAI, … ",
    value: 80,
  },
  {
    name: "Git, GitHub, BitBucket, Gitlab",
    value: 90,
  },
  {
    name: "Figma, Zeplin, AdobeXD",
    value: 90,
  },
  {
    name: "Notion, Jira, Miro, ... ",
    value: 90,
  },
];

const services = [
  //   {
  //     title: "UI & UX Design",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  //   },
  //   {
  //     title: "Mobile Apps",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  //   },
  //   {
  //     title: "Wordpress Design",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  //   },
];

const dataportfolio = [
  {
    img: quizeezImg,
    description:
      "A “Who wants to be millionaire”-type quick quiz web app. Made with React",
    link: "https://quizeez.netlify.app/",
  },
  {
    img: moviieeImg,
    description:
      "A movie news page that provide info about latest movies: plot, rating, main casts, release date, … Made with React",
    link: "https://moviiee.netlify.app/",
  },
  {
    img: huyhungImg,
    description:
      "A landing page for an electricity tool startup in Vietnam – Made with vanilla Js and Html",
    link: "https://huyhung.netlify.app/",
  },
  {
    img: moshifyImg,
    description:
      "A cool landing page skeleton which can be easily updatedfor any type of products and services – Made with vanilla Js and Html",
    link: "https://duong-moshified.netlify.app/",
  },
];

const contactConfig = {
  YOUR_EMAIL: "duongpt.unix@gmail.com",
  YOUR_FONE: "(84)39 620 6630",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  //   YOUR_SERVICE_ID: "service_id",
  //   YOUR_TEMPLATE_ID: "template_id",
  //   YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/Duong-Bon-Jones",
  linkedin: "https://www.linkedin.com/in/duongpt95/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
