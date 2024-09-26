// import Logo from "./img/International_Pokémon_logo.svg.png";

import { HashRouter } from "react-router-dom";
import Pokedex from "./page/Pokedex";

function App() {
  return (
    <>
      {/* <main>
        <article className="context">
          <section className="logo">
            <img src={Logo} alt="" />
          </section>
          <section className="main-container">
            <ListPokemon />
          </section>
          <section className="container-footer">
            <p>© 2023 | Diseñado y codificado por Jerry Garcia</p>
          </section>
        </article>
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </main> */}
      <HashRouter>
        <Pokedex />
      </HashRouter>
    </>
  );
}

export default App;
