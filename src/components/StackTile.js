import React, { useState } from "react";
import { useStackFilterContext } from "../context/stackFilterContext";
import { ArrowsExpandIcon } from "@heroicons/react/outline";

function StackTile({ stack, filter = false }) {
  const [checked, setChecked] = useState([...Array(stack.length).fill(0)]);
  const { stackIds, setStackIds } = useStackFilterContext();
  if (filter) {
    return (
      <div className=" lg:flex lg:space-x-2 lg:mt-10">
        {stack.map((st, index) => (
          <div key={index} className="flex mt-10 lg:mt-2 ">
            <button
              onClick={() => {
                const stArray = [...checked];
                let stacks;

                if (stArray[index] === 1) {
                  stArray[index] = 0;
                  stacks = stackIds.filter((item) => item !== st.id);
                } else {
                  stArray[index] = 1;
                  stacks = [...stackIds, st.id];
                }

                setStackIds(stacks);
                setChecked(stArray);
              }}
              className={`bg-white-500 uppercase 
           px-4 py-2 rounded-full ${
             checked[index] === 1
               ? "text-white bg-purple-500"
               : "text-black dark:text-white bg-white-500  border border-gray-400"
           }
           
            hover:bg-purple-500 hover:text-white 
            hover:transition 
            duration-150 
            ease-out
          
            `}
            >
              {st.name}
            </button>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="lg:flex lg:space-x-2 lg:mt-10">
      {stack.map((st, index) => (
        <div key={index} className="flex mt-10 lg:mt-2 ">
          <button className="px-4 py-2 text-white uppercase bg-purple-500 rounded-full">
            {st.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default StackTile;
