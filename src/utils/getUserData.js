import axios from "axios";

export async function getUserData() {
  const { data } = await axios.get(process.env.HOSTAPI + "/users/1");

  const infos = {
    id: data.id,
    name: data.name,
    avatar: data.acf.avatar,
    title: data.acf.job_title,
    // stack: [
    //   { id: 1, name: "ASP NET CORE" },
    //   { id: 2, name: "flutter" },
    //   { id: 3, name: "react" },
    //   { id: 4, name: "react Native" },
    // ],
    howAmI: data.acf.howAmI,
  };
  return infos;
}
