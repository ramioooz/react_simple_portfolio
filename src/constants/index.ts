import { contactDetailsType, linkType, projectType, skillType } from "../types/types";

import {
  checkmark,
  github,
  linkedin,
  project_1,
  project_2,
  project_3,
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
  },
  {
    title: "LinkedIn-Profile",
    url: "https://www.linkedin.com/in/ramioooz",
    img: linkedin,
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
    name: "React",
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
    name: "Project 1",
    img: project_1,
    githubLink: "https://github.com",
    demoLink: "https://rami.sd",
  },
  {
    name: "Project 2",
    img: project_2,
    githubLink: "https://github.com",
    demoLink: "https://rami.sd",
  },
  {
    name: "Project 3",
    img: project_3,
    githubLink: "https://github.com",
    demoLink: "https://rami.sd",
  },
];

const contactDetails : contactDetailsType = {
  fullName: 'Rami Mohamed',
  email: 'rami.workstation@gmail.com',
  linkedIn: "https://www.linkedin.com/in/ramioooz"
}


// const services = [
//   {
//     title: "Web Developer",
//     icon: web,
//   },
//   {
//     title: "React Native Developer",
//     icon: mobile,
//   },
//   {
//     title: "Backend Developer",
//     icon: backend,
//   },
//   {
//     title: "Content Creator",
//     icon: creator,
//   },
// ];

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

export {
  navLinks,
  profileLinks,
  cvlink,
  frontendSkills,
  backendSkills,
  projects,
  contactDetails,
};
