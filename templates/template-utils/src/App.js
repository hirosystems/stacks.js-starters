import Intro from "./Intro";
import Units from "./utils/01-Unit";
import ClarityEncoder from "./utils/02-ClarityEncoder";

function App() {
  return (
    <div className="max-w-xl mx-auto p-4 space-y-8">
      <Intro />
      <Units />
      <ClarityEncoder />
    </div>
  );
}

export default App;
