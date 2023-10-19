import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ConnectWallet from "./components/ConnectWallet";
import ContractCallVote from "./components/ContractCallVote";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h2>Vite + React + Stacks.js 👋</h2>

      {/* ConnectWallet file: `./src/components/ConnectWallet.js` */}
      <ConnectWallet />

      {/* ContractCallVote file: `./src/components/ContractCallVote.js` */}
      <ContractCallVote />

      <div>
        <a
          className="App-link-stacks"
          href="https://docs.hiro.so/stacks.js/overview"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn to build on Stacks
        </a>
      </div>
      <div>
        <a
          className="App-link-stacks"
          href="https://github.com/hirosystems/stacks.js"
          rel="noopener noreferrer"
          target="_blank"
        >
          Visit the official Stacks.js repo
        </a>
      </div>

      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
