import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Game Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Python Developer",
    company_name: "Self-Driven | Ongoing",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - Ongoing",
    points: [
      "Developed and implemented Python scripts for various personal projects, including automation tools, data processing, and web scraping. In the process.",
      "Gained experience in utilizing Python libraries such as Pandas, NumPy, and BeautifulSoup to solve real-world problems. Or I think I have",
      "Collaborated with peers to build and troubleshoot Python-based applications, improving understanding of object-oriented programming (OOP) concepts and best practices. Some what true",
      "Built small-scale web applications using Flask/Django, implementing basic back-end logic and integrating with front-end frameworks. This one I did make a flask application for transfering file in local network",
    ],
  },
  {
    title: "Won A Hackathon",
    company_name: "College Level",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Year 2024",
    points: [
      "Utilized Python and TensorFlow to implement neural networks, allowing the robot to learn, adapt, and retain information over time.",
      "Gained hands-on experience in AI/ML, robotics, and problem-solving under tight deadlines while learning to apply theoretical concepts to real-world applications.",
    ],
  },
  {
    title: "Participated in NASA Hackathon",
    company_name: "NASA Space Apps Challenge",
    icon: shopify,
    iconBg: "#383E56",
    date: "Year 2024",
    points: [
      "Collaborated with a diverse team to develop innovative solutions for global challenges related to space exploration and Earth science.",
      "Focused on solving complex problems through the analysis of large datasets, leveraging cloud platforms and APIs to create actionable insights.",
      "Developed prototypes and presented them to a panel of NASA experts, incorporating feedback to improve the solution and enhance its impact.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Upcoming Hopefully",
    name: "..........",
    designation: "........",
    company: "...........",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Upcoming Hopefully",
    name: ".......",
    designation: "....",
    company: ".........",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Upcoming Hopefully",
    name: ".........",
    designation: "....",
    company: ".........",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Game Update",
    description:
      "This is a python app for uploading updated game made by me and then the user could download it.",
    tags: [
      {
        name: "tkinter",
        color: "blue-text-gradient",
      },
      {
        name: "github api",
        color: "green-text-gradient",
      }
    ],
    image: carrent,
    source_code_link: "https://github.com/Faith1406/Game-Update",
  },
  {
    name: "LLM-Model",
    description:
      "This is a future project.AI could face the current problems faced by AI model right now",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Pytorch",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Faith1406/LLM-Model",
  },
  {
    name: "MM",
    description:
      "A Unity Engine game I am working on.Still there is a lot to do",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "Blender",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Faith1406/MM",
  },
];

export { services, technologies, experiences, testimonials, projects };
