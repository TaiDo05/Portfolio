import React from "react";
import { motion } from "framer-motion";

const listContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: .7,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: 150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: .3 },
  },
};

const AboutMe = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row pb-6"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left Column */}
      <motion.div
        className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="py-6">
          <h2 className="font-semibold mb-1 text-xl text-white">Hello! I'm Nguyen Tai</h2>
          <p className="text-base leading-6">
            Web developer from Vietnam. I have experience in web
            site building, also I am good at WordPress. I love to
            talk with you about our unique.
          </p>
        </div>
      </motion.div>

      {/* Right Column */}
      <motion.div
        className="w-full md:w-1/2 p-6"
        initial="hidden"
        animate="visible"
        variants={listContainerVariants}
      >
        <ul className="flex flex-col gap-2">
          {[
            { label: "Age:", value: "20" },
            { label: "Residence:", value: "Vietnam" },
            { label: "Freelance:", value: "Available" },
            { label: "Address:", value: "Ho Chi Minh City" },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="aboutRightLi flex justify-between border-b border-zinc-800 py-2 hover:bg-zinc-800/40 px-2 rounded transition-all duration-200"
              variants={listItemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <span className="aboutRightLiSpan">{item.label}</span>
              <span className="text-zinc-300">{item.value}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
