const Luces_Est = () => {
  return (
    <>
      <div className="luces-contenier absolute w-9/12 md:w-1/2 lg:w-3/12 h-24 rounded-br-full">
        <div className="w-9/12 h-full p-2 pl-4 flex gap-4">
          <div className="w-16 h-12 rounded-full bg-sky-500 border-8"></div>
          <div className="w-full h-full flex gap-2">
            <div className="w-6 h-6 bg-red-800 rounded-full border-2"></div>
            <div className="w-6 h-6 bg-lime-400 rounded-full border-2"></div>
            <div className="w-6 h-6 bg-green-700 rounded-full border-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Luces_Est;
