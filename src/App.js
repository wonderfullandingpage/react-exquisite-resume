import React from "react";
import { HashRouter } from "react-router-dom";
import {  mainBody, about, leadership, works, skills, experiences } from "./config/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import Leadership from "./components/home/Leadership.jsx";
import Experience from "./components/home/Experience";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />

      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}

      {experiences.show && <Experience experiences={experiences} />}
      <Project heading={works.heading} works={works.works} />
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && <Skills heading={skills.heading} hardSkills={skills.hardSkills} softSkills={skills.softSkills} />}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <HashRouter basename={process.env.PUBLIC_URL + "/"}>
      <Navbar ref={titleRef} />
      <Home ref={titleRef} />
      <Footer />
    </HashRouter>
  );
};

export default App;
