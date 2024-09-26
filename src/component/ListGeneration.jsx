/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Helper from "../helper/helper";
import { NavLink } from "react-router-dom";

const ListGeneration = ({ HandleMenu }) => {
  const [ListGeneration, setListGeneration] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [viewMenu, setViewMenu] = useState("");

  const api = Helper();
  const url = "https://pokeapi.co/api/v2/generation";

  const HandleListMenu = () => {
    HandleMenu();
    if (viewMenu === "") setViewMenu("is-active");
    else setViewMenu("");
  };

  const ListLoading = () => {
    setLoading(true);
    api.get(url).then((resp) => {
      if (!resp.err) {
        setListGeneration(resp.results);
        setError(null);
      } else {
        setError(resp);
        setListGeneration(null);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    ListLoading();
  }, []);

  return (
    <>
      <section className="bg-green-900 border-solid border-2 border-black p-4 rounded-lg w-full h-full overflow-auto flex-1">
        {error && (
          <h3 className="text-white">{`Error: ${error.status} ${error.stattusText}`}</h3>
        )}
        {Loading && <h3>Cargando...</h3>}
        {ListGeneration && (
          <ul className="flex flex-col gap-2 md:gap-4 lg:gap-2">
            {ListGeneration.map((el, index) => {
              return (
                <NavLink
                  key={index}
                  to={`/${el.name}`}
                  className={`text-white hover:text-green-400 font-bold uppercase font-mono md:text-xl lg:text-sm ease-out duration-300 ${(
                    isActive
                  ) => (isActive ? `text-green-400 pointer-events-none` : ``)}`}
                  onClick={HandleListMenu}
                >
                  {el.name}
                </NavLink>
              );
            })}
          </ul>
        )}
      </section>
    </>
  );
};

export default ListGeneration;
