import {
  contactDetailsType,
  linkType,
  projectType,
  skillType,
} from "../types/types";

import {
  checkmark,
  github,
  linkedin,
  proj_shopping_cart,
  proj_smart_data_table_v1,
  proj_users_login_v1,
  proj_kanban_dashboard_v1,
  proj_profile_website_v1,
} from "../assets";

const navLinks: linkType[] = [
  {
    title: "About",
    url: "./#about",
  },
  {
    title: "Experience",
    url: "./#experience",
  },
  {
    title: "Projects",
    url: "./#projects",
  },
  {
    title: "Contact",
    url: "./#contact",
  },
];

const cvlink: linkType = {
  title: "CV-link",
  url: "https://docs.google.com/document/d/14X6nSzgZxu_4qO130MzRWjh4V_2k3XG96jvcC3Uxx_Y/edit?usp=sharing",
};

const profileLinks: linkType[] = [
  {
    title: "Github-Profile",
    url: "https://github.com/ramioooz",
    img: github,
    altTxt:
      "Eng. Rami Mohamed, Full Stack Developer, Software Developer, Github icon",
  },
  {
    title: "LinkedIn-Profile",
    url: "https://www.linkedin.com/in/ramioooz",
    img: linkedin,
    altTxt:
      "Eng. Rami Mohamed, Full Stack Developer, Software Developer, Linkedin icon",
  },
];

const frontendSkills: skillType[] = [
  {
    name: "HTML",
    level: "Experienced",
    icon: checkmark,
  },
  {
    name: "CSS",
    level: "Experienced",
    icon: checkmark,
  },
  {
    name: "JavaScript",
    level: "Experienced",
    icon: checkmark,
  },
  {
    name: "TypeScript",
    level: "Experienced",
    icon: checkmark,
  },
  {
    name: "React JS",
    level: "Experienced",
    icon: checkmark,
  },
  {
    name: "NEXT JS",
    level: "Experienced",
    icon: checkmark,
  },
  {
    name: "Flutter",
    level: "Experienced",
    icon: checkmark,
  },
  {
    name: "Dart",
    level: "Experienced",
    icon: checkmark,
  },
  {
    name: "TailwindCSS",
    level: "Experienced",
    icon: checkmark,
  },
];
const backendSkills: skillType[] = [
  {
    name: "NestJS",
    level: "Experienced",
    icon: checkmark,
  },
  {
    name: "MySQL",
    level: "Experienced",
    icon: checkmark,
  },
  {
    name: "NodeJs",
    level: "Experienced",
    icon: checkmark,
  },
  {
    name: "MongoDB",
    level: "Experienced",
    icon: checkmark,
  },
  {
    name: "Prisma",
    level: "Experienced",
    icon: checkmark,
  },
  {
    name: "PHP",
    level: "Intermediate",
    icon: checkmark,
  },
  {
    name: "ExpressJS",
    level: "Experienced",
    icon: checkmark,
  },
  {
    name: "WebSockets",
    level: "Experienced",
    icon: checkmark,
  },
  {
    name: "RESTFUL API",
    level: "Experienced",
    icon: checkmark,
  },
  {
    name: "GraphQL",
    level: "Intermediate",
    icon: checkmark,
  },
];

const projects: projectType[] = [
  {
    name: "Shopping Cart",
    img: proj_shopping_cart,
    githubLink: "https://github.com/ramioooz/react_simple_shopping_cart",
    demoLink: "http://react-simple-shopping-cart.portfolio.rami.sd/",
  },
  {
    name: "Smart Data Table v1",
    img: proj_smart_data_table_v1,
    githubLink: "https://github.com/ramioooz/react_smart_data_table_v1",
    demoLink: "https://astudio-data-table.rami.sd/",
  },
  {
    name: "Users Login",
    img: proj_users_login_v1,
    // githubLink: "", // <-- no public github repo for now
    demoLink: "https://react-users-login.portfolio.rami.sd",
  },
  {
    name: "Kanban Dashboard v1",
    img: proj_kanban_dashboard_v1,
    githubLink: "https://github.com/ramioooz/react_simple_kanban_dashboard_v1",
    demoLink: "https://react-simple-kanban-dashboard.portfolio.rami.sd/",
  },
  {
    name: "Portfolio Website",
    img: proj_profile_website_v1,
    githubLink: "https://github.com/ramioooz/react_simple_portfolio",
    demoLink: "https://rami.sd",
  },
];

const contactDetails: contactDetailsType = {
  fullName: "Rami Mohamed",
  email: "rami.workstation@gmail.com",
  linkedIn: "https://www.linkedin.com/in/ramioooz",
  jobTitle: "Full Stack Developer",
  aboutMe: 
  `I have been working in both frontend and backend web development for more than 10 years. 
  I build smart software solutions for web and mobile. 
  I use the latest development technologies like Flutter, MongoDB, JavaScript, Node JS, React JS, and NEXT JS. 
  I also develop mobile games for Android. 
  I use project management tools like GitHub, Jira, and Trello. 
  I adopt software development agile methodologies like Scrum and Kanban.`,
};

const general_altTxt =
  "Eng. Rami Mohamed, Full Stack Developer, Software Developer ";
const imgAltTxt_profileImage: string = general_altTxt + "Profile Image";
const imgAltTxt_emailIcon: string = general_altTxt + "Contact Me, Email Icon";
const imgAltTxt_linkedInIcon: string =
  general_altTxt + "Contact Me, LinkedIn Icon";
const imgAltTxt_projectImage: string = general_altTxt + "Project Image";
const imgAltTxt_skillIcon: string =
  general_altTxt + "Software Developer, Skill Icon";
const imgAltTxt_experienceIcon: string =
  general_altTxt + "About Me, Experience Icon";
const imgAltTxt_educationIcon: string =
  general_altTxt + "About Me, Education Icon";
const imgAltTxt_arrowIcon: string = general_altTxt + "About Me, Arrow Icon";

export {
  navLinks,
  profileLinks,
  cvlink,
  frontendSkills,
  backendSkills,
  projects,
  contactDetails,
  imgAltTxt_profileImage,
  imgAltTxt_emailIcon,
  imgAltTxt_linkedInIcon,
  imgAltTxt_projectImage,
  imgAltTxt_skillIcon,
  imgAltTxt_experienceIcon,
  imgAltTxt_educationIcon,
  imgAltTxt_arrowIcon,
};
