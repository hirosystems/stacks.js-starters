const Intro = () => {
  return (
    <div className="bg-gray-100 p-5 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-3">Stacks Utils</h1>
      <div className="flex space-x-4">
        <a
          href="https://docs.hiro.so/"
          rel="noopener noreferrer"
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
        >
          Hiro Docs
        </a>
        <a
          href="https://stacks.js.org/"
          rel="noopener noreferrer"
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
        >
          Stacks.js Reference
        </a>
      </div>
    </div>
  );
};

export default Intro;
