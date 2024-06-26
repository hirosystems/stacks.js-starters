import React, { useState } from "react";
import { parse } from "@stacks/transactions/dist/clarity/parser";
import { bytesToHex } from "@stacks/common";
import { Cl } from "@stacks/transactions";

const ClarityEncoder = () => {
  const [clarityValueString, setClarityValueString] = useState("");
  const [hex, setHex] = useState("");
  const [error, setError] = useState("");

  const encodeClarity = (clarity) => {
    try {
      const hex = bytesToHex(Cl.serialize(parse(clarity)));
      return `0x${hex}`;
    } catch (err) {
      setError(`Failed to encode: ${err}`);
      return "";
    }
  };

  const decodeHex = (hex) => {
    try {
      const repr = Cl.deserialize(hex);
      return Cl.prettyPrint(repr);
    } catch (err) {
      setError(`Failed to decode: ${err}`);
      return "";
    }
  };

  const handleClarityChange = (e) => {
    setError("");
    const clarity = e.target.value;
    setClarityValueString(clarity);
    if (!clarity) return;
    setHex(encodeClarity(clarity));
  };

  const handleHexChange = (e) => {
    setError("");
    const hex = e.target.value;
    setHex(hex);
    if (!hex) return;
    setClarityValueString(decodeHex(hex));
  };

  return (
    <div className="bg-white p-5 rounded-lg relative">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Clarity Encoder</h2>
      {error && (
        <div className="absolute right-0 top-0 mt-2 mr-2 w-2 h-2 bg-red-400 rounded-full" />
      )}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <label className="col-span-1 mt-2 flex items-start text-gray-700 text-sm font-bold">
          Clarity Value
        </label>
        <textarea
          value={clarityValueString}
          onChange={handleClarityChange}
          className="font-mono col-span-2 border rounded p-3 text-gray-700 leading-tight focus:outline-none resize-none"
          rows="3"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <label className="col-span-1 flex items-center text-gray-700 text-sm font-bold">
          Hex
        </label>
        <input
          type="text"
          value={hex}
          onChange={handleHexChange}
          className="font-mono col-span-2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
};

export default ClarityEncoder;
