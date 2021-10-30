import React from "react";

function StackTile({ stack }) {
  return (
    <div className="lg:flex lg:space-x-2 lg:mt-10">
      {stack.map((st, index) => (
        <div
          key={index}
          className="mt-10 lg:mt-2 flex
                   "
        >
          <button className="bg-purple-500 uppercase  px-4 py-2 rounded-full text-white">
            {st.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default StackTile;
