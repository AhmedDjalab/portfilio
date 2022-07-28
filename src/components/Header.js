import Image from "next/image";
import faker from "faker";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { LightBulbIcon } from "@heroicons/react/outline";
import { useLightDarkThemeContext } from "../context/lightDarkThemeContext";
import { useTheme } from "next-themes";
import NextLink from "next/link";
function Header({ user, isActive = null }) {
  const { theme, setTheme } = useTheme();

  const dark = theme === "dark" ? true : false;
  return (
    <div className="justify-between md:flex">
      {/* left  */}
      {/* md:mt-20  md:ml-40  mx-2 my-2 */}
      <div className="justify-between mx-2 my-2 md:flex md:mt-20 md:ml-40">
        <NextLink href="/">
          <img
            className="relative w-32 h-32 border-4 border-purple-500 rounded-full cursor-pointer border-opacity-60 dark:border-purple-500 "
            src={user.avatar}
          />
        </NextLink>

        <div className="flex flex-col justify-between md:mx-5 md:my-3 ">
          {/* right the name  */}

          <NextLink href="/">
            <div className="cursor-pointer">
              <h2 className="mt-4 text-xl font-bold uppercase dark:text-white md:mt-0 ">
                {user.name}
              </h2>
              <div className="w-10 h-2 mt-5 bg-purple-500 rounded-full md:mt-2 " />
            </div>
          </NextLink>
          {/* the navBar */}
          <NavBar isActive={isActive} />
        </div>
      </div>
      <LightBulbIcon
        className={`mt-20 mr-20 h-10
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
    </div>
  );
}

export default Header;
