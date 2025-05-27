import React from "react";

import MyServices from "./MyServices.jsx";
import FunFact from "./FunFact.jsx";
import Title from "../home/Title.jsx";
import AboutMe from "./AboutMe.jsx";

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="About" subTitle="Me" />
      <AboutMe />
      <Title title="My" subTitle="Services" />
      <MyServices />
      <Title title="Fun" subTitle="Fact" />
      <FunFact />
    </section>
  );
};

export default About;