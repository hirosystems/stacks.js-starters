import Image from "next/image";
import UtilClarityDecode from "../components/util-clarity-decode";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full justify-between font-mono text-2xl">
        Stacks Utils
      </div>

      <div className="max-w-5xl w-full flex flex-col gap-8">
        <UtilClarityDecode />
      </div>

      <div className="grid text-left max-w-5xl grid-cols-2">
        <a
          href="https://docs.hiro.so"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Hiro Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn more about tools for Stacks and Bitcoin
          </p>
        </a>

        <a
          href="https://stacks.js.org"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Stacks.js Reference{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Lookup the exact functions and parameters from Stacks.js
          </p>
        </a>
      </div>
    </main>
  );
}
