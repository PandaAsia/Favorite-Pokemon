import Luces_Est from "../component/Luces_EST";
import Menu from "../component/Menu";
import ViewPokemon from "../component/ViewPokemon";

const Pokedex = () => {
  return (
    <>
      <main className="w-screen h-screen">
        <Luces_Est></Luces_Est>
        <div className="w-full h-full p-1 md:p-2 lg:px-4">
          <div className="w-full h-full border-2 border-black p-1 pt-24 md:px-4 lg:px-10">
            <ViewPokemon></ViewPokemon>
            <Menu></Menu>
          </div>
        </div>
      </main>
    </>
  );
};
export default Pokedex;
