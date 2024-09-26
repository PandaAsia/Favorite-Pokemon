const DecorationMenu = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-2">
        <div className="w-full h-3/5 flex flex-wrap">
          <div className="w-1/5 h-auto bg-cyan-400 border-solid border-2 border-black rounded-tl-lg"></div>
          <div className="w-1/5 h-auto bg-cyan-400 border-solid border-t-2 border-r-2 border-b-2 border-black"></div>
          <div className="w-1/5 h-auto bg-cyan-400 border-solid border-t-2 border-r-2 border-b-2 border-black"></div>
          <div className="w-1/5 h-auto bg-cyan-400 border-solid border-t-2 border-r-2 border-b-2 border-black"></div>
          <div className="w-1/5 h-auto bg-cyan-400 border-solid border-t-2 border-r-2 border-b-2 border-black rounded-tr-lg"></div>
          <div className="w-1/5 h-auto bg-cyan-400 border-solid border-l-2 border-b-2 border-r-2 border-black rounded-bl-lg"></div>
          <div className="w-1/5 h-auto bg-cyan-400 border-solid border-b-2 border-r-2 border-black"></div>
          <div className="w-1/5 h-auto bg-cyan-400 border-solid border-b-2 border-r-2 border-black"></div>
          <div className="w-1/5 h-auto bg-cyan-400 border-solid border-b-2 border-r-2 border-black"></div>
          <div className="w-1/5 h-auto bg-cyan-400 border-solid border-b-2 border-r-2 border-black rounded-br-lg"></div>
        </div>
        <div className="w-full h-4 flex gap-2 justify-end">
          <div className="bg-green-900 border-solid border-2 border-black rounded-full w-2/12 h-full"></div>
          <div className="bg-green-900 border-solid border-2 border-black rounded-full w-2/12 h-full"></div>
        </div>
        <div className="w-full h-1/5 flex">
          <div className="w-full h-full flex gap-2">
            <div className="bg-slate-300 w-3/12 h-full border-solid border-2 border-black rounded-lg"></div>
            <div className="bg-slate-300 w-3/12 h-full border-solid border-2 border-black rounded-lg"></div>
          </div>
          <div className="w-2/12 h-full bg-amber-700 rounded-full border-solid border-2 border-black"></div>
        </div>
      </div>
    </>
  );
};

export default DecorationMenu;
