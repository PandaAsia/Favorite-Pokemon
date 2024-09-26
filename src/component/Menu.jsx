import { useState } from "react";
import PanelMenu from "./PanelMenu";
import Crus from "./crus";
import Decorations from "./decoraction";

const Menu = () => {
  const [viewMenu, setViewMenu] = useState("");
  const HandleMenu = () => {
    if (viewMenu === "") {
      setViewMenu("is-active");
    } else {
      setViewMenu("");
    }
  };
  return (
    <>
      <section className="flex w-full h-1/5 p-2 gap-2">
        <div className="flex flex-col-reverse gap-2 my-auto h-full">
          <div className="h-3/5">
            <div className="ps-12">
              <button
                className="bg-green-500 w-full h-full rounded-lg px-8 py-4 border-solid border-2 border-black hover:bg-green-300 ps-10 md:text-2xl font-mono font-bold uppercase lg:text-sm"
                type="button"
                onClick={HandleMenu}
              >
                Menu
              </button>
            </div>

            <PanelMenu viewMenu={viewMenu} HandleMenu={HandleMenu}></PanelMenu>
          </div>
          <Decorations />
        </div>
        <Crus />
      </section>
    </>
  );
};
export default Menu;
