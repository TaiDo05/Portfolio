import React, { useEffect, useRef } from "react";
import Title from "../home/Title";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
 const scrollRef = useRef(null);

  // useEffect(() => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollTop = 0;
  //   }
  // }, []);
  return (
    <section id="resume">
      <Title title="My" subTitle="Resume" />
      <Education />
      <Title title="My" subTitle="Skills" />
      <Skills />
    </section>
  );
};

export default Resume;