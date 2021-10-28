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
];

function NavBar() {
  return (
    <div className="md:flex mb-2 ">
      {NavButtons.map(({ title, path }) => (
        <h2
          key={`${title + path}`}
          className="font-bold text-lg text-gray-500 mr-10 mt-10 uppercase md:mt-0"
        >
          {title}
        </h2>
      ))}
    </div>
  );
}

export default NavBar;
