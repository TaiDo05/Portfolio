import React from "react";
import {
  AiAgency,
  weather,
  yoga,
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
  
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="AI Agency Website"
            category="Website"
            link="https://fe-react-ai-agency.vercel.app/"
            image={AiAgency}
          />
          <ProjectsCard
            title="Website Yoga Design"
            link="https://www.figma.com/design/j4XHtIhPgcRJEBGYzYNt69/Untitled?node-id=0-1&p=f&t=RSubZWIITZMFLXtC-0"
            category="Design"
            image={yoga}
          />
          <ProjectsCard
            title="Infinity Logo"
            category="Logo"
            image={workImgThree}
          />
          <ProjectsCard
            title="Mobile Application"
            category="Shopping"
            image={workImgFour}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Responsive website"
            category="E-commerce"
            image={workImgFive}
          />
          <ProjectsCard
            title="Weather App Design"
            category="Design"
            link="https://www.figma.com/design/zuYAl8aZUaVozNtiu0Elng/Untitled?node-id=0-1&p=f&t=dwhgzvRZJlYMAbn2-0"
            image={weather}
          />
          <ProjectsCard
            title="Ideas & Blog"
            category="Website"
            image={workImgSeven}
          />
          <ProjectsCard
            title="ZOSS Logo"
            category="Logo"
            image={workImgEight}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;