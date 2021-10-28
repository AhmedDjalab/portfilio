import Image from "next/image";
import faker from "faker";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="bg-white md:max-w-6xl md:mx-auto ">
      <div className="md:flex  md:mt-20  md:ml-40  mx-2 my-2 ">
        {/* left  */}
        <img
          className="relative w-32 h-32 rounded-full"
          src="http://lorempixel.com/400/200/people/7"
        />

        <div className="flex flex-col md:mx-5 md:my-3 justify-between ">
          {/* right the name  */}
          <div>
            <h2 className="font-bold text-xl uppercase  border-white  ">
              Ahmed Djaalab
            </h2>
            <div className="h-2 w-10 bg-blue-600 rounded-full mt-2 " />
          </div>
          {/* the navBar */}
          <NavBar />
        </div>
      </div>
    </div>
  );
}

export default Header;
