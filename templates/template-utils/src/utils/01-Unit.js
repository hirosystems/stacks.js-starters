import React, { useState } from "react";

const Units = () => {
  const [stx, setStx] = useState("");
  const [microStx, setMicroStx] = useState("");

  const handleStxChange = (e) => {
    const stxs = e.target.value;
    setStx(stxs);
    setMicroStx(stxs * 1000000); // 1 STX = 1,000,000 microSTX
  };

  const handleMicroStxChange = (e) => {
    const microStxs = e.target.value;
    setMicroStx(microStxs);
    setStx(microStxs / 1000000);
  };

  return (
    <div className="bg-white p-5 rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        STX Unit Converter
      </h2>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <label className="col-span-1 flex items-center text-gray-700 text-sm font-bold">
          STX
        </label>
        <input
          type="number"
          value={stx}
          onChange={handleStxChange}
          className="font-mono col-span-2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <label className="col-span-1 flex items-center text-gray-700 text-sm font-bold">
          microSTX
        </label>
        <input
          type="number"
          value={microStx}
          onChange={handleMicroStxChange}
          className="font-mono col-span-2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
};

export default Units;
