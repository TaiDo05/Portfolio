import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BiCodeAlt } from "react-icons/bi";
import { FaFlag } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import ResumeTitle from "./ResumeTitle";

const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const SkillBar = ({ name, level, Icon }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="py-3 border-b border-zinc-800 group"
  >
    <p className="text-base text-textColor -mb-1.5 flex items-center gap-2">
      <Icon className="text-designColor group-hover:animate-pulse" />
      {name}
    </p>
    <span className="w-full bg-zinc-600 h-1 inline-flex relative rounded">
      <motion.span
        className="h-full absolute top-0 left-0 bg-designColor rounded"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1 }}
      />
    </span>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-9 gap-10 lgl:gap-0 px-6">
      <div className="col-span-9 md:col-span-4">
        <AnimatedSection delay={0}>
          <ResumeTitle title="Coding" icon={<BiCodeAlt />} />
          <div className="py-4">
            <SkillBar name="JavaScript" level={70} Icon={BiCodeAlt} />
            <SkillBar name="PHP" level={70} Icon={BiCodeAlt} />
            <SkillBar name="React.js" level={60} Icon={BiCodeAlt} />
            <SkillBar name="Java" level={80} Icon={BiCodeAlt} />
          </div>
        </AnimatedSection>
      </div>

      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <motion.span
          className="w-[1px] h-full bg-zinc-800 inline-flex"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1 }}
        ></motion.span>
      </div>

      <div className="col-span-9 md:col-span-4">
        <AnimatedSection delay={0.2}>
          <ResumeTitle title="Languages" icon={<FaFlag />} />
          <div className="py-4">
            <SkillBar name="English" level={60} Icon={FaFlag} />
            <SkillBar name="Japan" level={30} Icon={FaFlag} />
        
          </div>
        </AnimatedSection>
      </div>
       <div className="col-span-9 md:col-span-4">
        <AnimatedSection delay={0.2}>
          <ResumeTitle title="Hobbies" icon={<FaFlag />} />
          <div className="py-4">
            <SkillBar name="Football" level={70} Icon={FaFlag} />
            <SkillBar name="Reading Book" level={40} Icon={FaFlag} />
            <SkillBar name="Music" level={80} Icon={FaFlag} />
            <SkillBar name="Game" level={100} Icon={FaFlag} />
          </div>
        </AnimatedSection>
      </div>

      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <motion.span
          className="w-[1px] h-full bg-zinc-800 inline-flex"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1 }}
        ></motion.span>
      </div>

      <div className="col-span-9 md:col-span-4">
        <AnimatedSection delay={0.4}>
          <ResumeTitle title="Knowledge" icon={<IoIosPaper />} />
          <ul className="py-4 flex flex-col gap-2 border-b border-zinc-800">
            {[
              "Website hosting",
              "iOS and android apps",
              "Create logo design",
              "Design for print",
              "Modern and mobile-ready",
              "Advertising services include",
              "Graphics and animations",
              "Search engine marketing",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-4 text-textColor"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-designColor text-lg animate-pulse">
                  <GiCheckMark />
                </span>
                {item}
              </motion.li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Skills;
