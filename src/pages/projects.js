import Header from "../components/Header";

const porjectsData = [
  {
    id: 1,
    title: "Kheddam",
    mainImage: "http://lorempixel.com/city/200/200/",
    description:
      "Kheddam is a new platform that connect workers and their services to clients, in anytime anywhere",

    stack: ["ASP NET CORE", "signalR", "Flutter", "React"],
    brief:
      "Kheddam is a new platform that connect workers and their services to clients, in anytime anywhere",
    result:
      "Kheddam is a new platform that connect workers and their services to clients, in anytime anywhere",
  },
  {
    id: 2,
    title: "Ever",
    mainImage: "http://lorempixel.com/city/200/200/",
    description:
      "Kheddam is a new platform that connect workers and their services to clients, in anytime anywhere",

    stack: ["ASP NET CORE", "signalR", "Flutter", "React"],
    brief:
      "Kheddam is a new platform that connect workers and their services to clients, in anytime anywhere",
    result:
      "Kheddam is a new platform that connect workers and their services to clients, in anytime anywhere",
  },
  {
    id: 3,
    title: "Tawsil",
    mainImage: "http://lorempixel.com/city/200/200/",
    description:
      "Kheddam is a new platform that connect workers and their services to clients, in anytime anywhere",

    stack: ["ASP NET CORE", "signalR", "Flutter", "React"],
    brief:
      "Kheddam is a new platform that connect workers and their services to clients, in anytime anywhere",
    result:
      "Kheddam is a new platform that connect workers and their services to clients, in anytime anywhere",
  },
];

function projects() {
  return (
    <div>
      <Header isActive="Projects" />
      <div className="lg:max-w-6xl  lg:mx-auto px-20 mt-20">
        {porjectsData.map(
          ({ id, title, description, mainImage, brief, result, stack }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-row mb-10
             items-center space-x-5"
            >
              <img
                src={mainImage}
                className="h-[600px] w-[500px] hover:scale-x-110 hover:scale-y-110  
                transition-all duration-250 ease-out lg:mr-10 shadow-2xl rounded-lg mt-5
                "
              />

              <div className="flex flex-col  mt-10 lg:mt-0">
                <p className="text-5xl font-semiBold pb-10">{title}</p>
                <p className="text-2xl ">{description}</p>
                {/* stack */}
                <div className="lg:flex lg:space-x-2 lg:mt-10">
                  {stack.map((st, index) => (
                    <div
                      key={index}
                      className="mt-10 lg:mt-2 flex
                   "
                    >
                      <button className="bg-purple-500 uppercase  px-4 py-2 rounded-full text-white">
                        {st}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default projects;
