import Image from "next/image";
import faker from "faker";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { LightBulbIcon } from "@heroicons/react/outline";
import { useLightDarkThemeContext } from "../context/lightDarkThemeContext";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
import { mainProfile } from "../consts/data";

function Header({ user, isActive = null }) {
  const { theme, setTheme } = useTheme();
  let { github, linkedin } = user;
  let pdfLink = process.env.PDFLINK;
  github = github || mainProfile.github;
  linkedin = linkedin || mainProfile.linkdein;

  const dark = theme === "dark" ? true : false;
  return (
    <div className="relative flex-row-reverse justify-between mt-10 md:flex md:mt-0">
      {/* left  */}
      {/* md:mt-20  md:ml-40  mx-2 my-2 */}{" "}
      <LightBulbIcon
        className={`md:mt-20 md:mr-20 h-10 right-0 absolute md:relative 
           ${
             !dark
               ? "text-yellow-500 hover:text-black transition delay-200 ease-out"
               : "text-white hover:text-yellow-500 transition delay-200 ease-out"
           }

        
        `}
        onClick={() => {
          if (theme === "light") setTheme("dark");
          else setTheme("light");
        }}
      >
        Ahmed
      </LightBulbIcon>
      <div className="justify-between mx-2 my-2 md:flex md:mt-20 md:ml-40">
        <NextLink href="/">
          <img
            className="relative z-10 w-32 h-32 border-4 border-purple-500 rounded-full cursor-pointer border-opacity-60 dark:border-purple-500 "
            src={user.avatar}
          ></img>
        </NextLink>

        <div className="flex flex-col justify-between md:mx-5 md:my-3 ">
          {/* right the name  */}

          <div className="flex items-baseline gap-3 mt-4 md:mt-0 ">
            <NextLink href="/">
              <h2 className="text-2xl font-bold uppercase cursor-pointer dark:text-white ">
                {user.name}
              </h2>
            </NextLink>
            <a href={github}>
              <FaGithub className="w-4 h-4 ml-5 text-purple-500 cursor-pointer" />
            </a>
            <a href={linkedin}>
              <FaLinkedinIn className="w-4 h-4 text-purple-500 cursor-pointer " />
            </a>
            <a href={pdfLink} download>
              <ImProfile className="w-5 h-5 text-purple-500 cursor-pointer " />
            </a>
          </div>

          <div className="w-10 h-2 mt-5 bg-purple-500 rounded-full md:mt-2 " />

          {/* the navBar */}
          <NavBar
            isActive={isActive}
            github={github}
            linkedin={linkedin}
            pdfLink={pdfLink}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
