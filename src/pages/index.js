import Header from "../components/Header";
import Head from "next/head";
import { getUserData } from "../utils/getUserData";
export default function Home({ user }) {
  // set the default user data

  return (
    <div className="bg-white dark:bg-black h-screen ">
      <Head>
        <title>{user.name}</title>
      </Head>
      {/* header */}
      <Header user={user} />

      <div className="max-w-[550px] mx-auto mt-20  md:ml-[200px] ">
        <p className="text-2xl">
          <span className="text-5xl font-bold dark:text-white">
            Hi, I'm {user.name?.split(" ")[0]}.
          </span>
          <br />
          <br />
          {user.howAmI}
          <br />
          <br />
        </p>
      </div>

      {/* main page  */}
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const user = await getUserData();
    return {
      props: {
        user,
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
