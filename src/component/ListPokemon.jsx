import { useParams } from "react-router-dom";
import Helper from "../helper/helper";
import { useEffect, useState } from "react";
import TypePokemon from "./TYpePokemons";

const ListPokemon = () => {
  const [generationBD, setGenerationBD] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const Gene = id ? id : "generation-i";

  const [isOpenModal, setIsOpenModal] = useState(false);

  const api = Helper();
  const url = `https://pokeapi.co/api/v2/generation/${Gene}`;

  const ListTypes = () => {
    setLoading(true);
    api.get(url).then((res) => {
      if (!res.err) {
        setGenerationBD(res.name);
        setError(null);
      } else {
        setGenerationBD(null);
        setError(res);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    if (localStorage.getItem(Gene) === null) {
      localStorage.setItem(`${Gene}`, "");
    }
    ListTypes();
  }, [id]);

  return (
    <>
      <article
        className={`w-full h-full border-2 border-black rounded-lg bg-cyan-500 grid grid-cols-3 md:grid-cols-5 gap-2 p-2 ${
          isOpenModal ? `overflow-hidden` : `overflow-auto`
        }  items-center justify-center lg:grid-cols-10 relative`}
      >
        <TypePokemon setIsOpenModal={setIsOpenModal}></TypePokemon>
      </article>
      <article className="flex items-center justify-between w-full h-auto pl-2 grow-0 py-2 pr-2 md:pl-14 md:py-4 lg:py-2">
        <div className="List-Poke-circle w-12 h-12 border-2  border-black rounded-full"></div>
        <div className="w-auto">
          <h2 className="block text-xl md:text-3xl lg:text-xl font-bold uppercase font-mono text-zinc-800">
            {Loading && <>Cargando</>}
            {error && <>Generation</>}
            {generationBD && generationBD}
          </h2>
        </div>
      </article>
    </>
  );
};
export default ListPokemon;
