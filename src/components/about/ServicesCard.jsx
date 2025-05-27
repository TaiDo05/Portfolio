import React from "react";
import { motion } from "framer-motion";

const ServicesCard = ({ icons, title, subTitle }) => {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 transition-all duration-300 group cursor-pointer 
                 hover:shadow-[0_0_15px_#edff20] hover:scale-105"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // chỉ hiện 1 lần khi vào view
    >
      <div className="text-5xl text-designColor flex justify-center mb-4 transition-transform duration-300 group-hover:rotate-6">
        {icons}
      </div>
      <h3 className="text-xl font-bold text-center text-white mb-2 group-hover:text-designColor transition-colors">
        {title}
      </h3>
      <p className="text-sm text-zinc-300 leading-6">{subTitle}</p>
    </motion.div>
  );
};

export default ServicesCard;
