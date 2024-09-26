import "./Modal.css";
// eslint-disable-next-line react/prop-types
const Modal = ({ children, isClosed, isOpen }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <>
      <article
        className={`${
          isOpen ? "flex" : "hidden"
        } bg-amber-400 fixed top-0 left-0 w-full h-full md:absolute z-40 modal-container overflow-auto`}
        onClick={isClosed}
      >
        <div
          className="w-full h-full z-40 flex flex-col gap-2  items-center py-4"
          onClick={handleModalContainerClick}
        >
          <button
            className=" w-3/6 lg:w-1/6 bg-blue-500 py-2 lg:py-1 border-solid border-black border-2 rounded-lg hover:bg-blue-300 ease-out duration-300 font-bold uppercase font-mono lg:text-sm"
            onClick={isClosed}
          >
            Cerrar
          </button>
          {children}
        </div>
      </article>
    </>
  );
};
export default Modal;
