// import { useState } from "react";
import { FaSquarespace } from "react-icons/fa";
import html from '../assets/images/html.jpeg'
import css from '../assets/images/css.jpeg'
import js from '../assets/images/javascript-icon.png'
import c from '../assets/images/C.jpeg'
import git from '../assets/images/githublogo.jpeg'
import node from '../assets/images/nodejs-icon.png'
import ts from '../assets/images/typescript-icon.png'
import sql from '../assets/images/sql.jpeg'
import react from '../assets/images/react-icon.png'
import twind from '../assets/images/tailwindcss-logo.png'

// const [openSidebar, setOpenSidebar] = useState<boolean>(false)

// import React from 'react'
const Portfolio = () => {
  return (
    <>
      <div
        id="home"
        className="border w-[100%] h-[90vh] bg-[url('/src/assets/images/pexels-misael-garcia-832776-1707823.jpg')] bg-no-repeat bg-center bg-cover rounded-xl text-white"
      >
        <div className="p-4 flex items-center justify-center gap-[100px] ">
          <div className="">
            <a href="#home">
              <FaSquarespace size={40} />
            </a>
          </div>
          <div className="">
            <ul className="flex text-xl gap-[30px]">
              <a href="#home">
                <li>HOME</li>
              </a>
              <a href="#about">
                <li>ABOUT</li>
              </a>
              <li>SKILLS</li>
              <li>PROJECTS</li>
              <li>CONTACT ME</li>
            </ul>
          </div>
        </div>
        <div className="text flex gap-[30px] flex-col items-center justify-center mt-32 ">
          <p className="text-6xl">I'M JACOB INALA PRINCE</p>
          <p className="text-3xl">Software Engineer/ Frontend Developer</p>
        </div>
      </div>

      
        <div id="about" className="w-[100%] mt-11 ">
          <div className="flex items-center justify-center font-extrabold text-3xl">
            About me
          </div>
          <div className="text-lg text-left p-10 leading-10">
            <p>
              My name is Inala. I am passionate about coding, finding joy in
              solving complex problems and creating innovative solutions. Every
              new programming language or project is an opportunity for growth
              and creativity.
            </p>
            <p>
              {" "}
              Through coding, I aspire to make a positive impact and
              continuously learn in this ever-evolving field. Beyond coding, I
              enjoy collaborating with others on tech projects, sharing
              knowledge, and exploring the latest technological advancements.
            </p>
            <p>
              {" "}
              My dedication to coding is driven by a desire to contribute
              meaningfully to the tech community and to use technology to solve
              real-world challenges.
            </p>
            <a href=""><button className="border px-4 bg-slate-300 mt-7 rounded-xl">Get resume</button></a>
          </div>
        </div>

        <div className="">
        <div className="flex items-center justify-center font-extrabold text-3xl">
            My Skills
          </div>
          <div className="grid grid-cols-5 items-center gap-10 p-10 ml-20 ">
            <div className=" items-center">
              <img src={html} className= "w-[100px]" />
            </div>
            <div className=" items-center">
              <img src={css} className = "w-[100px]" />
            </div>
            <div className=" items-center">
              <img src={js} className = "w-[100px]" />
            </div>
            <div className=" items-center">
              <img src={git} className = "w-[100px]" />
            </div>
            <div className=" items-center">
              <img src={c} className = "w-[100px]" />
            </div>
            <div className=" items-center">
              <img src={node} className = "w-[100px]" />
            </div>
            <div className=" items-center">
              <img src={ts} className = "w-[100px]" />
            </div>
            <div className=" items-center">
              <img src={sql} className = "w-[100px]" />
            </div>
            <div className=" items-center">
              <img src={react} className = "w-[100px]" />
            </div>
            <div className=" items-center">
              <img src={twind} className = "w-[100px]" />
``            </div>
          </div>
        </div>
    </>
  );
};

export default Portfolio;
