import React from "react";

const Loader = () => {
  return (
    <div className="w-full mx-auto">
      <div className="animate-pulse flex">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-5 bg-gray-400 rounded"></div>
          <div className="h-5 bg-gray-400 rounded"></div>
          <div className="h-5 bg-gray-400 rounded"></div>
          <div className="h-5 bg-gray-400 rounded"></div>
          <div className="h-5 bg-gray-400 rounded"></div>
          <div className="h-5 bg-gray-400 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
