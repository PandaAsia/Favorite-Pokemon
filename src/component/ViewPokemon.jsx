// import { useEffect } from "react";
// import { useState } from "react";
// import { helpHttp } from "../helper/helper";
// import TypePokemon from "../component/TYpePokemons";
// import Loader from "../component/Loader";
// import Error from "../component/Error";

import { Route, Routes } from "react-router-dom";
import Error404 from "./404";
import ListPokemon from "./ListPokemon";

const ViewPokemon = () => {
  return (
    <>
      <section className="w-full h-4/5 bg-gray-300 border-2 border-black rounded-lg flex flex-col p-1 md:px-4 lg:px-14">
        <div className="w-full h-auto flex flex-row justify-center py-1 gap-8 grow-0 md:py-2">
          <div className="List-Poke-circle w-3 h-3 border-2 border-black rounded-full"></div>
          <div className="List-Poke-circle w-3 h-3 border-2 border-black rounded-full"></div>
        </div>
        <Routes>
          <Route path="/" element={<ListPokemon />}>
            <Route path=":id" element={<ListPokemon />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </section>
    </>
  );
};

export default ViewPokemon;
