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
  // {
  //   title: "Download Resume",
  //   path: "https://dash.djaalabahmed.com/wp-content/uploads/2022/02/AhmedDjaalab2021CV.pdf",
  // },
];

function NavBar({ github, linkedin, pdfLink, isActive = false }) {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className=" md:flex md:mt-6">
      {/** Mobile view  */}
      <section className="MOBILE-MENU flex lg:hidden ">
        <div
          className="HAMBURGER-ICON space-y-2 absolute left-0 -top-10"
          onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
        >
          <span className="block h-1 w-8 animate-pulse bg-purple-600"></span>
          <span className="block h-1 w-8 animate-pulse bg-purple-600"></span>
          <span className="block h-1 w-8 animate-pulse bg-purple-600"></span>
        </div>

        <div
          className={isNavOpen ? "showMenuNav dark:bg-black" : "hideMenuNav"}
        >
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
          >
            <svg
              className="h-8 w-8 text-purple-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]  ">
            {NavButtons.map(({ title, path }) => (
              <li className="border-b border-gray-400 my-8 uppercase hover:border-purple-600 hover:border-b-4">
                <a href={path}>{title}</a>
              </li>
            ))}

            <li className="border-b border-gray-400 my-8 uppercase hover:border-purple-600 hover:border-b-4">
              <a href={github}>Github</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase hover:border-purple-600 hover:border-b-4">
              <a href={linkedin}>Linkedin</a>
            </li>
          </ul>
        </div>
      </section>

      {/** desktop view  */}
      <section className="hidden md:flex">
        {NavButtons.map(({ title, path }) =>
          title === "Download Resume" ? (
            <a
              href={path}
              key={`${title + path}`}
              target="_blank"
              download
              className="mt-10 mr-10 text-lg font-bold text-gray-600 uppercase transition duration-300 dark:text-white md:mt-0 hover:text-purple-600 focus:text-blue-600 active:text-blue-600"
            >
              Download Resume
            </a>
          ) : (
            <h2
              onClick={() => {
                router.push(path);
              }}
              key={`${title + path}`}
              className={`font-bold 
          text-lg cursor-pointer ${
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
          )
        )}
      </section>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
     
     
    
    `}</style>
    </nav>
  );
}

export default NavBar;
