/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Helper from "../helper/helper";
import PokemonButton from "./PokemonButton";
import { useParams } from "react-router-dom";

const TypePokemon = ({ setIsOpenModal }) => {
  const [generationBD, setGenerationBD] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [savePokemon, setSavePokemon] = useState([]);

  const { id } = useParams();
  const gene = id ? id : "generation-i";
  const data = localStorage.getItem(gene)
    ? JSON.parse(localStorage.getItem(gene))
    : null;

  const api = Helper();
  const url = "https://pokeapi.co/api/v2/type/";

  const SaverPokemon = (gene, type, data) => {
    setSavePokemon((PrevSave) => ({ ...PrevSave, [type]: data }));
    localStorage.setItem(
      gene,
      JSON.stringify({ ...savePokemon, [type]: data })
    );
  };

  function CargarPokemon() {
    setLoading(true);
    api.get(url).then((res) => {
      if (!res.err) {
        setError(null);
        setGenerationBD(res.results);
      } else {
        setError(res.err);
        setGenerationBD(null);
      }
      setLoading(false);
    });
  }

  useEffect(() => {
    setSavePokemon(data);
    CargarPokemon();
  }, []);

  useEffect(() => {}, [id]);
  return (
    <>
      {loading && <h2>Cargando</h2>}
      {error && <h2>Error 404</h2>}
      {generationBD &&
        generationBD.map((el, index, array) => {
          if (index <= array.length - 3) {
            return (
              <PokemonButton
                key={index}
                type={el.name}
                handleSave={SaverPokemon}
                setIsOpenModal={setIsOpenModal}
              />
            );
          }
        })}
    </>
  );
};

export default TypePokemon;
