import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import FunFactCard from "./FunFactCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,  // cách nhau 0.3s
    },
  },
};

const FunFact = () => {
  return (
    <motion.div
      className="px-0 grid grid-cols-2 md:grid-cols-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <FunFactCard icon={<BsTrophyFill />} des="5 Awards Won" />
      <FunFactCard icon={<SiAntdesign />} des="10 Finished Projects" />
      <FunFactCard icon={<BiCodeAlt />} des="100 hours of coding" />
      <FunFactCard icon={<IoLogoYoutube />} des="1.5k Subscription" />
    </motion.div>
  );
};

export default FunFact;
