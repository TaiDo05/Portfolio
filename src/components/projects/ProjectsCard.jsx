import React, { useState, useEffect, useRef } from "react";

const ProjectsCard = ({ image, link, title, category }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`relative w-full py-8 flex flex-col justify-center items-center border-b-[1px] border-b-zinc-800
        transform transition-all duration-700 ease-out rounded-md cursor-pointer group
        ${visible ? 
          "opacity-100 translate-y-0 rotate-0 scale-100" : 
          "opacity-0 translate-y-10 rotate-3 scale-90"
        }
      `}
    >
      <a href={link} target="_blank" className="relative w-full h-full mb-3 overflow-hidden rounded-md">
        {/* <a href={link}> */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-md scale-100 group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        {/* </a> */}

        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-md" />

        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex justify-center items-center rounded-md">
          <h4 className="text-white text-xl font-semibold">{title}</h4>
        </div>
      </a>
      <h3 className="font-titleFont text-lg font-semibold text-[#ccc]">{title}</h3>
      <p className="text-base text-gray-400 -mt-1">{category}</p>
    </div>
  );
};

export default ProjectsCard;
