import Image from "next/image";
import faker from "faker";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { LightBulbIcon } from "@heroicons/react/outline";
import { useLightDarkThemeContext } from "../context/lightDarkThemeContext";
import { useTheme } from "next-themes";
function Header({ user, isActive = null }) {
  const { theme, setTheme } = useTheme();

  const dark = theme === "dark" ? true : false;
  return (
    <div className="md:flex justify-between">
      {/* left  */}
      {/* md:mt-20  md:ml-40  mx-2 my-2 */}
      <div className="md:flex  md:mt-20 justify-between md:ml-40  mx-2 my-2">
        <img className="relative w-32 h-32 rounded-full" src={user.avatar} />

        <div className="flex flex-col md:mx-5 md:my-3 justify-between ">
          {/* right the name  */}
          <div>
            <h2
              className="font-bold
     text-xl uppercase
      dark:text-white
       mt-4
       md:mt-0
       "
            >
              {user.name}
            </h2>
            <div
              className="h-2
     w-10
      bg-purple-500
       rounded-full
        mt-5
        md:mt-2
        
        "
            />
          </div>
          {/* the navBar */}
          <NavBar isActive={isActive} />
        </div>
      </div>
      <LightBulbIcon
        className={`mt-20 mr-20 h-10
           ${
             theme === "light"
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
