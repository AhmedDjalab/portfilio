import React from "react";
import StackTile from "./StackTile";
import NextLink, { Link } from "next/link";
import Image from "next/image";
function ProjectCard({ id, mainImage, title, description, stack, link }) {
  return (
    <NextLink href={link}>
      <div
        key={id}
        className="cursor-pointer 
        
             shadow-xl rounded-lg mr-5 ml-10 md:ml-0 mb-10 md:mb-0 
             w-[350px]  mt-10   bg-gray-100 dark:bg-[#1E1E1E]"
      >
        <img src={mainImage} className="object-contain w-[350px] h-[200px]" />

        <p className="px-3 text-2xl font-bold text-black dark:text-white ">
          {title}
        </p>

        <p className="px-2 py-2 text-xl text-black line-clamp-5 text-bold dark:text-white">
          {description}
        </p>
        <div>
          <div className=" flex  mt-5 text-white flex-wrap h-[100px]  ml-2 ">
            {stack.map((st, index) => (
              <p
                key={st.name + index}
                className="h-10 px-2 py-2 mr-2 bg-purple-500 rounded-xl"
              >
                {st.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </NextLink>
  );
}

export default ProjectCard;
