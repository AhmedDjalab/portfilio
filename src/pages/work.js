import { ArrowsExpandIcon, ViewListIcon } from "@heroicons/react/outline";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import ProjectTile from "../components/ProjectTile";
import StackTile from "../components/StackTile";
import { porjectsData } from "../consts/data";
import { useStackFilterContext } from "../context/stackFilterContext";
import { getUserData } from "../utils/getUserData";

function worker({ user, workers, stack }) {
  const { stackIds, setStackIds } = useStackFilterContext();
  const [inProp, setInProp] = useState(false);

  return (
    <div className="bg-white dark:bg-black  h-full">
      <Header isActive="Work" user={user} />

      <div className=" mt-10   lg:max-w-6xl mx-auto md:ml-40 h-screen">
        <div className="mb-10">
          <div className="flex content-end mt-2">
            <h2 className=" flex-grow text-3xl font-bold  dark:text-white">
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

        {
          <motion.div
            key={inProp ? inProp : "empty"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-full flex flex-wrap  ">
              {workers ? (
                workers
                  .filter((worker) => {
                    if (stackIds.length > 0) {
                      console.log(
                        "this is stakc data ",
                        worker.stackIds.includes(stackIds),
                        worker.stackIds.some((r) => stackIds.includes(r))
                      );
                      return worker.stackIds.some((r) => stackIds.includes(r));
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
                        <ProjectTile
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

export default worker;
export async function getServerSideProps(context) {
  try {
    const { data } = await axios.get(process.env.HOSTAPI + "/work/?_embed=1");
    const user = await getUserData();
    const workers = data.map((work) => ({
      id: work.id,
      title: work.title.rendered,
      mainImage: work.acf.mainImage,
      description: work.acf.description,
      // stack: [
      //   { id: 1, name: "ASP NET CORE" },
      //   { id: 2, name: "flutter" },
      //   { id: 3, name: "react" },
      //   { id: 4, name: "react Native" },
      // ],
      stack: work.acf.stack,
      stackIds: work.stack,

      brief: work.acf.brief,
      result: work.acf.result,
      link: work.acf.workurl,
    }));

    const { data: data2 } = await axios.get(process.env.HOSTAPI + "/stack/");

    const stack = data2.map((s) => ({
      id: s.id,
      name: s.name,
      checked: false,
    }));
    return {
      props: {
        user,
        workers,
        stack,
      },
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/500",
      },
      props: {},
    };
  }
}
