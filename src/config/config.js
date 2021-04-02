// Navigation Bar SECTION
const navBar = {
  show: true
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Master",
  middleName: "",
  lastName: "Resume",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/wonderfullandingpage"
    },
    {
      image: "fa-facebook",
      url: "https://github.com/wonderfullandingpage"
    },
    {
      image: "fa-instagram",
      url: "https://github.com/wonderfullandingpage"
    },
    {
      image: "fa-linkedin",
      url: "https://github.com/wonderfullandingpage"
    },
    {
      image: "fa-twitter",
      url: "https://github.com/wonderfullandingpage"
    }
  ]
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/img/head.jpg"),
  imageSize: 375,
  message:
    "My name is SuperMen. I’m a graduate of 2020 from National University of Sciences and Technology at Islamabad with a degree in Computer Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: "#"
};

// PROJECTS SECTION
const works = {
  heading: "Recent Works",
  works: [
    { title: "design-1", img: require("../assets/img/works/1.jpg") },
    { title: "design-2", img: require("../assets/img/works/2.jpg") },
    { title: "design-3", img: require("../assets/img/works/3.jpg") },
    { title: "design-4", img: require("../assets/img/works/4.jpg") },
    { title: "design-5", img: require("../assets/img/works/5.jpg") },
    { title: "design-6", img: require("../assets/img/works/6.jpg") },
    { title: "design-7", img: require("../assets/img/works/7.jpg") },
    { title: "design-8", img: require("../assets/img/works/8.jpg") },
    { title: "design-9", img: require("../assets/img/works/9.jpg") }
  ]
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../assets/img/head.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../assets/img/head.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    }
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Rust", value: 75 },
    { name: "Vue.js", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "Angular", value: 90 },
    { name: "React", value: 65 },
    { name: "Julia", value: 55 },
    { name: "Golang", value: 80 }
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 }
  ]
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer", // Here Add Company Name
      companylogo: require("../assets/img/dell.png"),
      date: "June 2018 – Present"
    },
    {
      role: "Front-End Developer",
      companylogo: require("../assets/img/boeing.png"),
      date: "May 2017 – May 2018"
    }
  ]
};

export { navBar, mainBody, about, skills, leadership, works, experiences };
