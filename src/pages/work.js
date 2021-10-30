import Header from "../components/Header";
import ProjectTile from "../components/ProjectTile";
import { porjectsData } from "../consts/data";

function worker() {
  return (
    <div>
      <Header isActive="Work" />
      <div className="mt-20 lg:max-w-6xl mx-auto md:ml-40">
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

export default worker;
