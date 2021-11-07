import axios from "axios";
import Header from "../components/Header";
import ProjectTile from "../components/ProjectTile";
import { porjectsData } from "../consts/data";
import { getUserData } from "../utils/getUserData";

function worker({ user, workers }) {
  return (
    <div className="bg-white dark:bg-black  h-full">
      <Header isActive="Work" user={user} />
      <div className=" mt-20 lg:max-w-6xl mx-auto md:ml-40 h-screen">
        {workers.map(
          ({ id, title, description, mainImage, brief, result, stack }) => (
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
    </div>
  );
}

export default worker;
export async function getServerSideProps(context) {
  const { data } = await axios.get(process.env.HOSTAPI + "/work/?_embed=1");
  const user = await getUserData();
  const workers = data.map((product) => ({
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
    brief: product.acf.brief,
    result: product.acf.result,
  }));
  return {
    props: {
      user,
      workers,
    },
  };
}
