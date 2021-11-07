import React from "react";
import StackTile from "./StackTile";

function ProjectTile({ id, mainImage, title, description, stack }) {
  return (
    <div
      key={id}
      className="flex flex-col lg:flex-row pb-10
             items-center space-x-5"
    >
      <img
        src={mainImage}
        className="h-[600px] w-[500px] hover:scale-x-110 hover:scale-y-110  
                transition-all duration-250 ease-out lg:mr-10 shadow-xl rounded-lg mt-5
                "
      />

      <div className="flex flex-col  mt-10 lg:mt-0">
        <p className="text-5xl font-semiBold pb-10 dark:text-white">{title}</p>
        <p className="text-2xl dark:text-white ">{description}</p>
        {/* stack */}

        {<StackTile stack={stack} />}
      </div>
    </div>
  );
}

export default ProjectTile;
