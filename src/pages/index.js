import Header from "../components/Header";
import Head from "next/head";
export default function Home() {
  return (
    <div className="bg-white md:max-w-6xl    md:mt-20  md:ml-40">
      <Head>
        <title>Ahmed Djaalab</title>
      </Head>

      {/* header */}
      <Header />

      <div className="max-w-[550px] mx-auto mt-20">
        <p className="text-2xl">
          <span className="text-5xl font-bold">Hi, I'm Ahmed.</span>
          <br />
          <br />
          I'm a web developer from in Southampton, UK. I’m currently the lead
          developer at a local agency, Fhoke. In my spare time I like working
          with a few select clients and building my own products
          <br />
          <br />
          My most recent product is Calendi. It’s a simple yet powerful
          editorial calendar for WordPress.
          <br />
          <br />
          You can usually find me on Twitter, but I'm occasionally on Product
          Hunt and Reddit as well.
          <br />
          <br />
        </p>
      </div>

      {/* main page  */}
    </div>
  );
}
