import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ResumeCardFlip = ({ badge, title, subTitle, des, extraInfo }) => {
  const [flipped, setFlipped] = useState(false);


  const ref = useRef(null);


  const isInView = useInView(ref, { once: true, margin: "-150px" }); 


  return (
    <div
      ref={ref}
      className="w-full max-w-md perspective cursor-pointer"
      onClick={() => isInView && setFlipped(!flipped)} // chỉ flip khi đã thấy trong viewport
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative w-full h-60 rounded-lg shadow-lg"
        animate={{
          rotateY: isInView ? (flipped ? 180 : 0) : 0, // chỉ xoay khi card trong view
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 50,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front side */}
        <motion.div
          className="absolute w-full h-full bg-zinc-900 border border-zinc-700 rounded-lg p-6 text-gray-200 flex flex-col items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 40,
            scale: isInView ? 1 : 1.2,
          }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="text-5xl mb-4 text-blue-500"
            animate={isInView ? { y: [0, -10, 0] } : {}}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >

          </motion.div>
          <h6 className={`text-sm ${badge === "" ? "text-designColor" : "text-zinc-400"} `}>
            {badge === "" ? "2013-Present" : badge}
          </h6>
          <h2 className="text-lg font-semibold mt-1">{title}</h2>
          <p className="text-sm text-zinc-400 mt-1">{subTitle}</p>
          <p className="text-base text-zinc-400 mt-2">{des}</p>
          <p className="mt-4 text-xs text-zinc-500 italic">Click card to flip</p>
        </motion.div>

        {/* Back side */}
        <motion.div
          className="absolute w-full h-full bg-zinc-900 border-designColor border rounded-lg p-6 text-white flex flex-col justify-center items-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-2">More Details</h3>
          <p className="text-sm">{extraInfo}</p>
          <p className="mt-4 text-xs italic">Click card to flip back</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResumeCardFlip;
