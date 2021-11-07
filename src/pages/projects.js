import axios from "axios";
import Header from "../components/Header";
import ProjectTile from "../components/ProjectTile";
import StackTile from "../components/StackTile";
import { porjectsData, StackData } from "../consts/data";
import { useStackFilterContext } from "../context/stackFilterContext";
import { getUserData } from "../utils/getUserData";

function projects({ projects, user, stack }) {
  const { stackIds, setStackIds } = useStackFilterContext();
  console.log("this is cntext ", stackIds);
  return (
    <div className="bg-white dark:bg-black dark:duration-300 dark:transition  h-full">
      <Header isActive="Projects" user={user} />

      <div className="mt-20 lg:max-w-6xl mx-auto md:ml-40 ">
        <div className="mx-5 my-5">
          <h1 className="text-5xl font-bold dark:text-white">Projects</h1>
          <br />
          <p className="text-2xl dark:text-white">
            In my spare time I like to tinker on side projects , Learn more .
            These are some of the results.
          </p>

          {/* filter by stack  */}

          <div>
            <h2 className="text-3xl font-bold mt-10 dark:text-white">
              Technologies
            </h2>
            <StackTile stack={stack} filter={true} />
          </div>
        </div>
        {
          <div className="h-screen">
            {projects
              .filter((project) => {
                if (stackIds.length > 0) {
                  console.log(
                    "this is stakc data ",
                    project.stackIds.includes(stackIds),
                    project.stackIds.some((r) => stackIds.includes(r))
                  );
                  return project.stackIds.some((r) => stackIds.includes(r));
                } else {
                  return true;
                }
              })
              .map(
                ({
                  id,
                  title,
                  description,
                  mainImage,
                  brief,
                  result,
                  stack,
                }) => (
                  <ProjectTile
                    key={id}
                    id={id}
                    mainImage={mainImage}
                    title={title}
                    description={description}
                    stack={stack}
                  />
                )
              )}
          </div>
        }
      </div>
    </div>
  );
}

export default projects;

export async function getServerSideProps(context) {
  const { data } = await axios.get(process.env.HOSTAPI + "/projects/?_embed=1");
  const user = await getUserData();
  const { data: data2 } = await axios.get(process.env.HOSTAPI + "/stack/");
  const projects = data.map((product) => ({
    id: product.id,
    title: product.title.rendered,
    mainImage: product.acf.mainImage,
    description: product.acf.description,
    // stack: [
    //   { id: 1, name: "ASP NET CORE" },
    //   { id: 2, name: "flutter" },
    //   { id: 3, name: "react" },
    //   { id: 4, name: "react Native" },
    // ],
    stack: product.acf.stack,
    stackIds: product.stack,
    brief: product.acf.brief,
    result: product.acf.result,
  }));
  console.log("ths is projects :: ", projects);

  const stack = data2.map((s) => ({
    id: s.id,
    name: s.name,
    checked: false,
  }));
  return {
    props: {
      projects,
      user,
      stack,
    },
  };
}
