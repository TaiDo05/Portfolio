import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";
import { motion } from "framer-motion";

const cardData = [
  {
    icons: <BiCodeAlt />,
    title: "Web Development",
    subTitle: "Build responsive, fast, and modern websites with React, Next.js or Laravel.",
  },
  {
    icons: <SiAntdesign />,
    title: "UI/UX Design",
    subTitle: "Design user-friendly and elegant interfaces using Figma or Adobe XD.",
  },
  {
    icons: <AiTwotoneAppstore />,
    title: "Mobile App",
    subTitle: "Cross-platform apps built with React Native, fast and beautiful.",
  },
  {
    icons: <FaAppStoreIos />,
    title: "SEO & Performance",
    subTitle: "Optimize websites for speed, Google ranking and better engagement.",
  },
];

const MyServices = () => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {cardData.map((card, index) => (
        <ServicesCard
          key={index}
          icons={card.icons}
          title={card.title}
          subTitle={card.subTitle}
        />
      ))}
    </motion.div>
  );
};

export default MyServices;
