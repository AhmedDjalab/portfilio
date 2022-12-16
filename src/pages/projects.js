import { ArrowsExpandIcon } from "@heroicons/react/outline";
import { ViewListIcon } from "@heroicons/react/outline";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import ProjectTile from "../components/ProjectTile";
import ProjectTitle2 from "../components/ProjectTitle2";
import StackTile from "../components/StackTile";
import { porjectsData, StackData } from "../consts/data";
import { useStackFilterContext } from "../context/stackFilterContext";
import { getUserData } from "../utils/getUserData";

function projects({ projects, user, stack }) {
  const { stackIds, setStackIds } = useStackFilterContext();
  const [inProp, setInProp] = useState(false);

  return (
    <div className="h-full p-4 bg-white md:p-2 dark:bg-black dark:duration-300 dark:transition">
      <Header isActive="Projects" user={user} />

      <div className="mx-auto mt-20 md:ml-40 ">
        <div className="mx-5 my-5">
          <h1 className="text-5xl font-bold dark:text-white">Projects</h1>
          <br />
          <p className="text-2xl dark:text-white">
            In my spare time, I like to tinker on side projects, learn more, try
            to clone some of the famous sites on the internet, These are some of
            the results.
          </p>

          {/* filter by stack  */}

          <div>
            <div className="flex content-end mt-10">
              <h2 className="flex-grow text-3xl font-bold dark:text-white">
                Technologies
              </h2>

              {inProp ? (
                <ArrowsExpandIcon
                  className="w-5 h-5"
                  onClick={() => setInProp(!inProp)}
                />
              ) : (
                <ViewListIcon
                  className="w-5 h-5"
                  onClick={() => setInProp(!inProp)}
                />
              )}
            </div>

            <StackTile stack={stack} filter={true} />
          </div>
        </div>
        {
          <motion.div
            key={inProp ? inProp : "empty"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap h-full ">
              {projects ? (
                projects
                  .filter((project) => {
                    if (stackIds.length > 0) {
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
                      link,
                      stack,
                    }) =>
                      inProp ? (
                        <ProjectTitle2
                          key={id}
                          id={id}
                          mainImage={mainImage}
                          title={title}
                          description={description}
                          stack={stack}
                          link={link}
                        />
                      ) : (
                        <ProjectCard
                          key={id}
                          id={id}
                          mainImage={mainImage}
                          title={title}
                          description={description}
                          stack={stack}
                          link={link}
                        />
                      )
                  )
              ) : (
                <h2 className="text-black">
                  Error when Loading Data Please Try Again{" "}
                </h2>
              )}
            </div>
          </motion.div>
        }
      </div>
    </div>
  );
}

export default projects;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  try {
    const { data } = await axios.get(
      process.env.PROTOCOL + process.env.HOSTAPI + "/projects/?_embed=1"
    );
    const user = await getUserData();
    const projects = data.map((project) => ({
      id: project.id,
      title: project.title.rendered,
      mainImage: project.acf.mainImage,
      description: project.acf.description,
      // stack: [
      //   { id: 1, name: "ASP NET CORE" },
      //   { id: 2, name: "flutter" },
      //   { id: 3, name: "react" },
      //   { id: 4, name: "react Native" },
      // ],
      stack: project.acf.stack,
      stackIds: project.stack,
      brief: project.acf.brief,
      result: project.acf.result,
      link: project.acf.projecturl,
    }));

    const { data: data2 } = await axios.get(process.env.PROTOCOL + process.env.HOSTAPI + "/stack/");

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
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/500",
      },
      props: {},
    };
  }
}
