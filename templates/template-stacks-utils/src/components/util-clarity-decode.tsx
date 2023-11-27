"use client";

import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { preconnect } from "react-dom";
import { Cl, deserializeCV } from "@stacks/transactions";

const UtilClarityDecode = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-bold">Decode Clarity values</h3>
      <Input ref={inputRef} placeholder="Serialized Clarity Hex" />
      <Button
        variant="secondary"
        onClick={() => {
          const input = inputRef.current?.value;
          if (!input) return;
          const decoded = Cl.deserialize(input);
          setValue(Cl.prettyPrint(decoded));
        }}
      >
        Decode
      </Button>
      {value && (
        <pre className="p-4 border rounded-lg text-gray-800 bg-gray-50 text-sm">
          <code>{value}</code>
        </pre>
      )}
    </div>
  );
};

export default UtilClarityDecode;
