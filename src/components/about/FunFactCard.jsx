import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 2 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const FunFactCard = ({ icon, des }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 rounded-xl"
      variants={itemVariants}
      whileHover={{ scale: 1.1, boxShadow: "0px 8px 24px rgba(0,0,0,0.2)" }}
    >
      <motion.div
        className="text-4xl text-primary mb-2"
        animate={{ y: [0] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <div className="text-designColor">
        {icon}
        </div>
      </motion.div>
      <p className="text-center text-sm font-semibold">{des}</p>
    </motion.div>
  );
};

export default FunFactCard;
