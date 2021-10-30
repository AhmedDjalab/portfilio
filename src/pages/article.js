import Header from "../components/Header";

function article() {
  return (
    <div>
      <Header isActive="Articles" />

      <div className="mt-20 lg:max-w-6xl mx-auto md:ml-40">
        <h2 className="text-2xl uppercase">there is no article for now</h2>
      </div>
    </div>
  );
}

export default article;
