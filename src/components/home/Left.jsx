import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";

import { avatar } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover object-[25%_25%] rounded-2xl"
          src={avatar}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 pt-5 pb-6">
          <h1 className="text-textColor text-3xl font-semibold">Đỗ Nguyên Tài</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaGithub />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaLinkedin />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <SiYoutubemusic />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <BsFacebook />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiInstagram />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <AiFillTwitterCircle />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiMail />
            </span>
          </div>
        </div>
        <div className="flex h-14">
          <a
            href={"#"}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <button className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
            Contact me <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;