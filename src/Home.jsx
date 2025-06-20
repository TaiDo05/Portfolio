import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork, MdOutlineClose } from "react-icons/md";
import { BsTelephonePlusFill } from "react-icons/bs";
import Resume from "./components/resume/Resume.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import SideNav from "./components/home/sidenav/SideNav.jsx"
import About from "./components/about/About.jsx";
import Left from "./components/home/Left.jsx";

const Home = () => {
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);
  const [sidenav, setSidenav] = useState(false);
  const ref = useRef();
    const scrollRef = useRef(null);


  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidenav(false);
      }
      
    });
  }, []);
  return (
    <div className="w-full lgl:w-[85%] h-full lgl:h-[85%] bg-transparent text-white z-50 flex md:flex-row flex-col items-start justify-between p-4 lgl:p-0">

      <div className="md:w-16 md:h-96 w-full bg-transparent flex-row flex md:flex-col gap-4 pb-2">

        <div
          onClick={() => setSidenav(true)}
          className="md:w-full w-[80px] h-20  bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group"
        >
          <div className="flex flex-col gap-1.5 p-4 overflow-hidden">
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block group-hover:bg-designColor duration-300"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
          </div>
        </div>



        {sidenav && (
          <div className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-50 z-50">
            <div className="w-96 h-full relative">
              <motion.div
                
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full bg-bodyColor overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]"
              >
                <SideNav />
                <span
                  onClick={() => setSidenav(false)}
                  className="absolute top-0 -right-16 w-12 h-12 bg-bodyColor text-2xl text-textColor hover:text-designColor duration-300 cursor-pointer flex items-center justify-center z-50"
                >
                  <MdOutlineClose />
                </span>
              </motion.div>
            </div>
          </div>
        )}


        <div className="w-full md:h-80 h-[80px] bg-bodyColor rounded-3xl flex md:flex-col flex-row items-center justify-between py-6">

          <span
            onClick={() =>
              setAbout(true) &
              setResume(false) &
              setProjects(false) &
              setContact(false)
            }
            className={`${about
                ? "text-designColor"
                : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
              } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          // className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
          >
            <FaUser />
            <span className="text-black font-medium md:block hidden text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              About
            </span>
          </span>
          {/* Resume Icon */}
          <div
            onClick={() => {
              setAbout(false);
              setResume(true);
              setProjects(false);
              setContact(false);

            }}
            className={`${resume
                ? "text-designColor"
                : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
              } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <IoIosPaper />
            <span className="text-black font-medium hidden md:block text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Resume
            </span>
          </div>

          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(true) &
              setContact(false)
            }
            className={`${projects
                ? "text-designColor"
                : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
              } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <MdWork />
            <span className="text-black font-medium hidden md:block text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Projects
            </span>
          </span>
          

          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(false) &
              setContact(true)
            }
            className={`${contact
                ? "text-designColor"
                : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
              } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <FaEnvelope />
            <span className="text-black font-medium hidden md:block text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Contact
            </span>
          </span>
         
        </div>

      </div>

      <div className="w-full lgl:w-[94%] h-full flex flex-col gap-6 lgl:gap-0 lgl:flex-row items-center">

            <Left />

        <div className="w-full lgl:w-8/12 h-[95%] bg-bodyColor rounded-2xl flex justify-center items-center">

          <div className="w-full h-full lgl:hidden bg-transparent rounded-2xl flex flex-col gap-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
  {about && <About />}
  {resume && <Resume />}
  {projects && <Projects />}
  {contact && <Contact />}
</div>

          <div  ref={scrollRef}
 className="w-full h-[96%] hidden lg:block justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
            {about && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            )}

            {resume && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
              <Resume />
              </motion.div>
            )}
            {projects && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            )}
            {contact && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
