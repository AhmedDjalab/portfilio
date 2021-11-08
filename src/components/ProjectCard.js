import React from "react";
import StackTile from "./StackTile";
import NextLink, { Link } from "next/link";
import Image from "next/dist/client/image";
function ProjectCard({ id, mainImage, title, description, stack, link }) {
  return (
    <div
      key={id}
      className="
             shadow-xl rounded-lg mr-5 ml-10 md:ml-0 mb-10 md:mb-0 w-[350px]  mt-10   bg-gray-100 dark:bg-blue-200"
    >
      <NextLink href={link}>
        <Image
          src={mainImage}
          objectFit="contain"
          width={350}
          height={200}
          className="cursor-pointer"
        />
      </NextLink>

      <NextLink href={link}>
        <p
          className="px-3 dark:text-black 
      text-black 
      text-2xl 
      font-bold cursor-pointer
      
      "
        >
          {title}
        </p>
      </NextLink>
      <p className="text-black px-2 py-2 text-bold text-xl">{description}</p>
      <div>
        <div className=" flex  mt-5 text-white flex-wrap h-[100px]  ml-2 ">
          {stack.map((st, index) => (
            <p
              key={st.name + index}
              className=" bg-purple-500 rounded-xl px-2 py-2 h-10 mr-2 "
            >
              {st.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
