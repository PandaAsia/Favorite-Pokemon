/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Helper from "../helper/helper";
import useModal from "../Hooks/Modal";
import Modal from "./Modal";
import Loader from "./Loader";
import Error from "./Error";
import { useParams } from "react-router-dom";

const PokemonButton = ({ type, handleSave, setIsOpenModal }) => {
  const [isOpenModal, openModal, closedModal] = useModal(false);

  const [dataPokemon, setDataPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [btnImage, setBtnImage] = useState(null);

  const [generations, setGenerations] = useState(null);

  const api = Helper();
  const { id } = useParams();
  const url = id ? id : "generation-i";

  function CargarPokemon(url) {
    openModal();
    setLoading(true);

    if (dataPokemon.length > 0) {
      setLoading(false);
      return;
    }

    api
      .get(`https://pokeapi.co/api/v2/generation/${url}`)
      .then((resp) => {
        if (!resp.err) {
          setError(null);
          return resp.pokemon_species;
        } else {
          setError(resp);
          setDataPokemon(null);
        }
      })
      .then((resp) => {
        resp.map((re) => {
          api
            .get(re.url)
            .then((res) => {
              if (!res.err) {
                setError(null);
                return res;
              } else {
                setError(res);
                setDataPokemon(null);
              }
            })
            .then((res) => {
              api
                .get(`https://pokeapi.co/api/v2/pokemon/${res.id}`)
                .then((re) => {
                  if (!re.err) {
                    setError(null);
                    re.types.map((ty) => {
                      if (ty.type.name == type) {
                        const poke_data = {
                          id: re.id,
                          name: re.name,
                          picture: re.sprites.front_default,
                        };
                        setDataPokemon((el) => [...el, poke_data]);
                      }
                    });
                  } else {
                    setError(res);
                    setDataPokemon(null);
                  }
                  setLoading(false);
                });
            });
        });
      });
  }

  function PokemonSeleccionado(ispokemon) {
    setBtnImage(ispokemon);
    closedModal();
    handleSave(url, type, ispokemon);
  }

  function PokemonClear() {
    setBtnImage(null);
    closedModal();
  }

  const handleLoading = () => {
    CargarPokemon(url);
  };

  useEffect(() => {
    if (generations != url) {
      setDataPokemon([]);
      PokemonClear();
      setBtnImage(null);
      setGenerations(generations);
    }
  }, [id]);

  useEffect(() => {
    if (localStorage.getItem(`${url}`)) {
      const dataStore = JSON.parse(localStorage.getItem(`${url}`));
      const data = dataStore && dataStore[type];
      if (data) setBtnImage(data);
    }
  }, [url]);

  useEffect(() => {
    setIsOpenModal(isOpenModal);
  }, [isOpenModal]);
  return (
    <>
      <div className="container-btn w-24 h-24 m-auto md:w-32 md:h-32 lg:w-24 lg:h-24 ">
        <button
          className="size-button bg-rose-500 rounded-full w-full h-full flex flex-col items-center justify-center border-solid border-2 border-neutral-950 hover:bg-black hover:text-slate-200 ease-out duration-300 z-0"
          onClick={handleLoading}
        >
          {btnImage && (
            <img
              src={btnImage.picture}
              alt={btnImage.name}
              className="h-3/5 m-0 p-0"
            />
          )}
          <p>{type}</p>
        </button>
        <Modal isOpen={isOpenModal} isClosed={closedModal}>
          {loading && <Loader />}
          {error && (
            <Error mensaje={error.status} mensaje2={error.statusText} />
          )}
          {dataPokemon && dataPokemon.length === 0 && loading === false ? (
            <div className="no-exit-pokemon">
              <h2>No hay Pokemons</h2>
            </div>
          ) : (
            <section className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 lg:gap-2 w-full pb-2">
              {dataPokemon.map((el, index) => {
                return btnImage && btnImage.id === el.id ? (
                  <button
                    key={index}
                    onClick={() => PokemonClear()}
                    className="w-full hover:bg-red-600 rounded-lg ease-in-out duration-300 hover:text-white"
                  >
                    <i className="bx bx-x-circle text-7xl"></i>
                  </button>
                ) : (
                  <button
                    key={index}
                    onClick={() => PokemonSeleccionado(el)}
                    className="w-full flex flex-col justify-center items-center hover:bg-red-600 rounded-lg ease-in-out duration-300 hover:text-white"
                  >
                    <img src={el.picture} alt={el.name} className="size-img" />
                    <p className="font-mono font-bold ">{el.name}</p>
                  </button>
                );
              })}
            </section>
          )}
        </Modal>
      </div>
    </>
  );
};
export default PokemonButton;
