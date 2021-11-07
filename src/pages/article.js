import Header from "../components/Header";
import { getUserData } from "../utils/getUserData";

function article({ user }) {
  return (
    <div className="bg-white dark:bg-black  h-screen">
      <Header isActive="Articles" user={user} />

      <div className="mt-20 lg:max-w-6xl mx-auto md:ml-40">
        <h2 className="text-2xl uppercase dark:text-white">
          there is no article for now
        </h2>
      </div>
    </div>
  );
}

export default article;
export async function getServerSideProps(context) {
  const user = await getUserData();
  return {
    props: {
      user,
    },
  };
}
