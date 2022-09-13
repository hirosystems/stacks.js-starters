import "./App.css";
import reactLogo from "./assets/react.svg";
import ConnectWallet from "./components/ConnectWallet";
import ContractCallVote from "./components/ContractCallVote";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h2>Vite + React + Stacks.js 👋</h2>

        {/* ConnectWallet file: `./src/components/ConnectWallet.js` */}
        <ConnectWallet />

        {/* ContractCallVote file: `./src/components/ContractCallVote.js` */}
        <ContractCallVote />

        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link-stacks"
          href="https://docs.hiro.so/build-apps/overview"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn about web apps on Stacks
        </a>
        <a
          className="App-link-stacks"
          href="https://github.com/hirosystems/stacks.js"
          rel="noopener noreferrer"
          target="_blank"
        >
          Visit the official Stacks.js repo
        </a>

        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn Vite
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
