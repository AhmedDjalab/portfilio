import React from "react";
import { FaGithub } from "react-icons/fa";
function SideLinks() {
  return (
    <div className="absolute flex flex-col m-auto bg-white top-1/3 dark:bg-black ">
      <FaGithub className="w-10 h-10" />
      <FaGithub className="w-10 h-10" />
      <FaGithub className="w-10 h-10" />
    </div>
  );
}

export default SideLinks;
