// import { useState } from "react";
import {  FaSquarespace } from "react-icons/fa";
import html from "../assets/images/html.jpeg";
import css from "../assets/images/css.jpeg";
import js from "../assets/images/javascript-icon.png";
import c from "../assets/images/C.jpeg";
import git from "../assets/images/githublogo.jpeg";
import node from "../assets/images/nodejs-icon.png";
import ts from "../assets/images/typescript-icon.png";
import sql from "../assets/images/sql.jpeg";
import react from "../assets/images/react-icon.png";
import twind from "../assets/images/tailwindcss-logo.png";
import picture from '../assets/images/Screenshot (2).png'
import image from '../assets/images/Screenshot (3).png'
import { FaGithub, FaInstagram, FaLinkedin , FaXTwitter } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";

// const [openSidebar, setOpenSidebar] = useState<boolean>(false)

// import React from 'react'
const Portfolio = () => {
  return (
    <>
      <div
        id="home"
        className="border w-[100%] h-[90vh] bg-[url('/src/assets/images/pexels-misael-garcia-832776-1707823.jpg')] bg-no-repeat bg-center bg-cover rounded-xl text-white"
      >
        <div className="p-4 flex items-center justify-center gap-[100px] max-md:gap-[30px] max-sm:justify-between max-sm:px-10 w-[100%]  ">
          <div className="">
            <a href="#home">
              <FaSquarespace size={30} />
            </a>
          </div>
          <div className="max-sm:hidden">
            <ul className="flex text-xl  gap-[30px] ">
              <a href="#home">
                <li>HOME</li>
              </a>
              <a href="#about">
                <li>ABOUT</li>
              </a>
              <a href="#skills">
                <li>SKILLS</li>
              </a>
              <a href="#projects">
              <li>PROJECTS</li>
              </a>
              <a href="#contact">
              <li>CONTACT ME</li>
              </a>
            </ul>
          </div>
          <div className="">
            <TiThMenu size={25} className=""/>
          </div>
        </div>
        <div className="text flex gap-[30px] text-center flex-col items-center justify-center mt-32 ">
          <p className="text-6xl font-bold max-sm:text-3xl">I'M JACOB INALA PRINCE</p>
          <p className="text-3xl ">Software Engineer/ Frontend Developer</p>
        </div>
      </div>

      <div id="about" className="w-[100%] mt-11 ">
        <div className="flex items-center justify-center font-extrabold text-3xl">
          About me
        </div>
        <div className="text-lg text-left p-10 leading-10 w-[100%]">
          <p>
            My name is Inala. I am passionate about coding, finding joy in
            solving complex problems and creating innovative solutions. Every
            new programming language or project is an opportunity for growth and
            creativity.
          </p>
          <p>
            {" "}
            Through coding, I aspire to make a positive impact and continuously
            learn in this ever-evolving field. Beyond coding, I enjoy
            collaborating with others on tech projects, sharing knowledge, and
            exploring the latest technological advancements.
          </p>
          <p>
            {" "}
            My dedication to coding is driven by a desire to contribute
            meaningfully to the tech community and to use technology to solve
            real-world challenges.
          </p>
          <a href="">
            <button className="border px-4 bg-slate-300 mt-7 rounded-xl hover:bg-slate-900 hover:text-white hover:transition hover:ease-in-out">
              Get resume
            </button>
          </a>
        </div>
      </div>

      <div className="" id="skills">
        <div className="flex items-center justify-center font-extrabold text-3xl">
          My Skills
        </div>
        <div className="grid grid-cols-5  items-center gap-10 p-10 ml-10 max-md:ml-0 max-sm:grid-cols-2 ">
          <div className=" items-center">
            <img src={html} className="w-[100px]" />
          </div>
          <div className=" items-center">
            <img src={css} className="w-[100px]" />
          </div>
          <div className=" items-center">
            <img src={js} className="w-[100px]" />
          </div>
          <div className=" items-center">
            <img src={git} className="w-[100px]" />
          </div>
          <div className=" items-center">
            <img src={c} className="w-[100px]" />
          </div>
          <div className=" items-center">
            <img src={node} className="w-[100px]" />
          </div>
          <div className=" items-center">
            <img src={ts} className="w-[100px]" />
          </div>
          <div className=" items-center">
            <img src={sql} className="w-[100px]" />
          </div>
          <div className=" items-center">
            <img src={react} className="w-[100px]" />
          </div>
          <div className=" items-center">
            <img src={twind} className="w-[100px]" />
          </div>
        </div>
      </div>
      <div className="" id="projects">
        <div className="flex items-center justify-center mt-6 mb-6 font-extrabold text-3xl">
          My Projects
        </div>
        <div className="flex items-center justify-start p-10 gap-10 max-sm:flex-col">
          <div className="w-[350px] h-[fit-content] p-2 border border-black  rounded-lg max-sm:w-[95%]">
            <img src={picture} className="" />
            <p className="mt-[5px] font-bold">ICONS8 CLONE</p>
            <p>A well implemented clone of the icons8 website using HTML and CSS only</p>
            <a href="https://icons8-green.vercel.app/" target="_blank"><button className="mt-[5px] border p-1 border-black">View website</button></a>
          </div>
          <div className="w-[350px] h-[fit-content] p-2 border border-black  rounded-lg max-sm:w-[95%]">
            <img src={image} className="" />
            <p className="mt-[5px] font-bold">ECOMMERCE</p>
            <p>Awell constructed ecommerce website using reactjs and typescript</p>
            <a href="https://fakestore-inalas-projects.vercel.app/" target="_blank"><button className="mt-[5px] border p-1 border-black">View website</button></a>
          </div>
        </div>
      </div>
      <div id="contact">
      <div className="flex items-center justify-center mt-6 mb-6 font-extrabold text-3xl">
          Contact me
        </div>
        <div className="flex items-center justify-center p-5 flex-col gap-7">
          <p className="font-bold text-2xl">Let's work together on your next project</p>
          <p>Looking for a developer to help bring your project idea into reality? look no further because I've got you covered</p>
        <div className="flex items-center gap-4 max-ssm:flex-col">
          <a href="https://www.instagram.com/inalajacob_16/" target="_blank"><FaInstagram size={50}/></a>
          <a href="https://github.com/Inala726" target="_blank"><FaGithub size={50}/></a>
          <a href="https://www.linkedin.com/in/inala-jacob-6b9664297/" target="_blank"><FaLinkedin size={50}/></a>
          <a href="https://x.com/JacobInala68304" target="_blank"><FaXTwitter size={50}/></a>
        </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
