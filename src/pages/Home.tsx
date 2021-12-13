import React from "react";
import Artist from "../components/Artist";
import Drop from "../components/Drop";

const Home: React.FC<{}> = () => {
  return (
    <main className="flex flex-col lg:flex-row align-center justify-center bg-black text-white">
      <Artist />
      <Drop />
    </main>
  );
};

export default Home;
