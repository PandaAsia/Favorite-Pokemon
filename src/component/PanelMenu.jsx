/* eslint-disable react/prop-types */

import ListGeneration from "./ListGeneration";
import DecorationMenu from "./decoration-menu";

/* eslint-disable no-unused-vars */
const PanelMenu = ({ viewMenu, HandleMenu }) => {
  return (
    <>
      <section
        className={`panel-menu w-screen h-screen bg-black absolute top-0 left-0 bottom-0 right-0 p-2 z-50 ${viewMenu}`}
      >
        <div className="panel-menu-bgroung List-Poke-circle w-full h-full p-4 lg:px-96 pt-28 md:pt-32 lg:pt-20 flex flex-col gap-2">
          <section className="w-full h-full flex flex-col gap-2">
            <div className="w-full h-4/6">
              <ListGeneration HandleMenu={HandleMenu} />
            </div>
            <div className="w-full h-2/6 flex flex-col gap-2">
              <div className="w-full h-4/6">
                <DecorationMenu />
              </div>
              <div className="w-full h-2/6 flex gap-6">
                <button
                  className="text-white font-bold uppercase font-mono bg-green-900 hover:bg-green-500 border-solid border-2 border-black w-full py-2 rounded-lg md:text-xl lg:text-sm ease-out duration-300"
                  type="button"
                  onClick={HandleMenu}
                >
                  Cerrar
                </button>
                <div className="bg-green-900 border-solid border-2 border-black w-full rounded-lg"></div>
              </div>
            </div>
          </section>
          {/* 
          <div className="w-full h-full flex-1">
            
            <div className="flex w-full h-full gap-10">
              
              
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};
export default PanelMenu;
