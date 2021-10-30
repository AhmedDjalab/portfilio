import Header from "../components/Header";
import ProjectTile from "../components/ProjectTile";
import StackTile from "../components/StackTile";
import { porjectsData, StackData } from "../consts/data";

function projects() {
  return (
    <div>
      <Header isActive="Projects" />

      <div className="mt-20 lg:max-w-6xl mx-auto md:ml-40">
        <div className="mx-5 my-5">
          <h1 className="text-5xl font-bold">Projects</h1>
          <br />
          <p className="text-2xl">
            In my spare time I like to tinker on side projects. These are some
            of the results.
          </p>

          {/* filter by stack  */}

          <div>
            <StackTile stack={StackData} />
          </div>
        </div>
        {porjectsData.map(
          ({ id, title, description, mainImage, brief, result, stack }) => (
            <ProjectTile
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

export default projects;
