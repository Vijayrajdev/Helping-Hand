import React from "react";

const Main = () => {
  return (
    <div className="flex justify-center md:min-h-[75vh] min-h-[80vh]">
      <div className="flex flex-col items-center text-center gap-8 pt-48 md:pt-20">
        <div className="flex flex-col md:gap-4 gap-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Please help him
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            To <span className="text-orange-500">Celebrate</span> his Birthday
          </h1>
        </div>
        <a target="blank" href="https://rzp.io/l/kPjdeSDd">
          <button className="px-6 py-2 border bg-orange-400 border-black hover:bg-transparent hover:text-white hover:border-white">
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

export default Main;
