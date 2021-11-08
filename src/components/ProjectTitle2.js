import React from "react";
import StackTile from "./StackTile";
import NextLink from "next/link";

function ProjectTitle2({ id, mainImage, title, description, stack, link }) {
  return (
    <div key={id} className=" w-full lg:max-w-full lg:flex mb-10 mt-5">
      <NextLink href={link}>
        <img
          className="h-[300px] lg:h-[300px] lg:w-[300px] cursor-pointer  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          src={mainImage}
          title={title}
        ></img>
      </NextLink>
      <div className=" bg-white dark:bg-black rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center"></p>
          <div className="text-gray-900 font-bold text-3xl mb-4 dark:text-white">{title}</div>
          <p className="text-gray-700 text-xl dark:text-white ">{description}</p>
          {<StackTile stack={stack} />}
        </div>
        {/* <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={mainImage}
            alt="Avatar of Writer"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">John Smith</p>
            <p className="text-gray-600">Aug 18</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ProjectTitle2;
