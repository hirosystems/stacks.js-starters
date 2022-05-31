import { useState } from "react";
import AppIntro from "./extra/AppIntro";
import AppTabs from "./extra/AppTabs";
import AppTransactions from "./extra/AppTransactions";

function App() {
  const [txs, setTxs] = useState([]);
  const addTx = (txId) =>
    setTxs((prev) => [{ txId, date: new Date() }, ...prev]);

  return (
    <div className="App">
      <AppIntro />
      <AppTabs addTx={addTx} />
      <AppTransactions txs={txs} />
    </div>
  );
}

export default App;
