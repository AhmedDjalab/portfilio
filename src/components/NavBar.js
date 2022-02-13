import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import NextLink from "next/link";

const NavButtons = [
  {
    title: "Work",
    path: "/work",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Articles",
    path: "/article",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Download Resume",
    path: "https://dash.djaalabahmed.com/wp-content/uploads/2022/02/AhmedDjaalab2021CV.pdf",
  },
];

function NavBar({ isActive = false }) {
  const router = useRouter();
  return (
    <div className="md:flex  md:mt-6">
      {NavButtons.map(({ title, path }) => (
      title === "Download Resume" ? 
       <a href={path} target="_blank" download className="
       text-gray-600 dark:text-white
       mr-10 mt-10 uppercase 
       md:mt-0 hover:text-purple-600
       transition duration-300
        focus:text-blue-600 active:text-blue-600
        font-bold 
          text-lg
       
       ">Download Resume</a>
      :
      
      <h2
          onClick={() => {
           
            router.push(path);
          }}
          key={`${title + path}`}
          className={`font-bold 
          text-lg  ${
            isActive && isActive === title
              ? "text-purple-500"
              : "text-gray-600 dark:text-white"
          }
           mr-10 mt-10 uppercase 
           md:mt-0 hover:text-purple-600
           transition duration-300
            focus:text-blue-600 active:text-blue-600
           `}
        >
          {title}
        </h2>
      ))}
     
    </div>
  );
}

export default NavBar;
