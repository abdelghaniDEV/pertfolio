import React from "react";
import logoabd from "../images/BERHOUCH@4x.png";
import htmlLogo from "../images/html5-logo-black.png";
import cssLogo from "../images/css-logo-black.png";

import { motion } from "framer-motion";
import "react-multi-carousel/lib/styles.css";

import BoxCompi from "../componnent/BoxCompi";
import ListProjects from "../componnent/ListProjects";
import reactjs from "../images/icons/icons8-react-js-48.png"
import Skils from "../componnent/Skils";


function Home() {
  const text = "AVAILABLE FOR FREELANCE".split(" ");
  const textSkils =
    " We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.".split(
      " "
    );

  return (
    <div className="relative">
      {/* Hero */}
      <div className="py-[80px] ">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <i class="bx bxs-polygon text-[#61CE70]"></i>
            {/* <h3 className="font-[600]">AVAILABLE FOR FREELANCE</h3> */}
            <div className="App">
              {text.map((el, i) => (
                <motion.span
                  className="font-[600]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.2,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="text-[55px] tracking-[-2px] leading-[50px] font-[900] flex flex-col items-center overflow-hidden">
            <div className="overflow-hidden">
              <motion.h1
                className=""
                initial={{ y: 80 }}
                animate={{ y: 1 }}
                transition={{
                  duration: 0.3,
                }}
              >
                ABDELGHANI
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                className="overflow-hidden"
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.3,
                }}
              >
                BERHOUCH
              </motion.h1>
            </div>
          </div>
          <p className="md:text-[40px] text-[20px] py-2 text-center font-[500] px-[20px] md:px-[70px]">Building digital solutions with precision and intent.</p>
          <span className="md:text-[20px] font-[500] text-[#a3a3a3] text-center"> 2+ Years of Experience • Based in MOROCCO, </span>
          <button className="font-[700] text-[14px] my-5 py-2 px-4 text-white bg-[#1D1D1F]">
              CONTACT ME
            </button>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 text-[30px] p container">
        <i class="bx bxl-github"></i>
        <i class="bx bxl-linkedin-square"></i>
        <i class="bx bxl-instagram-alt"></i>
      </div>
      <hr />
      {/* services */}
      <div className="bg-black py-[50px] text-white  ">
        <div className="flex flex-col gap-3">
          <div className="flex uppercase flex-col items-center text-[30px] font-[800] leading-[30px]">
            <h1>My Quality</h1>
            <h1> expertise</h1>
          </div>
          {/* <p className="text-center pt-2 px-[40px] font-[450] leading-[17px]">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p> */}
          <div className="text-center pt-2 px-[40px] font-[550] leading-[17px]">
            {textSkils.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 mt-5 gap-8 overflow-hidden">
          <BoxCompi title={'UI/UX Design'} text={'Craft intuitive navigation that makes features accessible. Choose layouts and graphics that fit your app s personality.'} />
          <BoxCompi title={'Software developer'} text={'Blend of functionality with aesthetics to create delightful experience.'} />
          <BoxCompi title={'Redevelopment Services'} text={'We modernize existing applications to improve performance and user experience.'}/>
          <BoxCompi title={'Performance Optimization'} text={'Optimize app performance for speed and smooth UX using Lighthouse and Webpack'}/>
        </div>
      </div>
      {/* projects */}
      <ListProjects />
      {/* About */}
      {/* <div className="container my-[50px]">
        <div>
          <div className="text-[26px] uppercase tracking-[-1px] leading-[26px] font-[900] flex flex-col items-center overflow-hidden">
            <div className="overflow-hidden">
              <motion.h1
                className=""
                initial={{ y: 80 }}
                animate={{ y: 1 }}
                transition={{
                  duration: 0.3,
                }}
              >
                more about
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                className="overflow-hidden"
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.3,
                }}
              >
                abdelghani©
              </motion.h1>
            </div>
          </div>
        </div>
        <div className="pt-[40px] px-[30px] origin-bottom overflow-hidden">
          <motion.img
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.8,
            }}
            src={logo}
            className="rounded-[50px] md:w-[200px] "
          />
        </div>
        <div className="text-center px-[10px] uppercase leading-[30px] font-[800] text-[23px] pt-[40px]">
          <p>
            I'M AN INNOVATIVE DESIGNER AND WEB developer IN MOROCCO. <br /> MY
            PASSION FOR MINIMALIST AESTHETICS, ELEGANT , <br /> AND INTUITIVE
            DESIGN SHINES THROUGH IN MY WORK.
          </p>
        </div>
        <div className="text-center pt-[40px]">
          <button className="font-[700] text-[15px] uppercase py-2 px-4 text-white rounded-[20px] bg-[#1D1D1F]">
            Download Resume
          </button>
        </div>
      </div> */}
      {/* Skills */}
     <Skils />
      {/** */}
      <div className="container mt-4">
        <div className="pb-4">
          <h2 className="text-[26px] uppercase font-[900]   ">motivation</h2>
        </div>
        <div className="">
          <p className="font-[500] text-[20px]">
            More than a job, web developer is an outlet for your vision. You
            have the power to take an idea from concept to reality. Your sites
            can tell a story,<strong>"show off a brand"</strong>, or change
            lives. As the web expands, so do the possibilities. You also have
            the flexibility to work remotely or in a fun agency setting. And
            nothing beats the rush of seeing your live sites in action.
          </p>
          <p className="font-[500] text-[20px] pt-4">
            As a web developer, you get to blend art and technology to create
            <strong>"digital experiences"</strong> that inform, entertain, and
            inspire. Every day is different - one day you may be sketching site
            layouts on paper, the next you're coding up responsive page
            templates. Web design keeps you on your toes!
          </p>
        </div>
        <div className="pt-8">
          <img src={logoabd} className="w-[300px]" />
        </div>
      </div>
    </div>
  );
}

export default Home;
