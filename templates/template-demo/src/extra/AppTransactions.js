const AppTransactions = ({ txs }) => {
  if (txs.length <= 0) {
    return <></>;
  }

  return (
    <div className="frame">
      <h3>Transaction History</h3>
      {txs.map((t, i) => (
        <p key={t.date}>
          <code>{txs.length - i}: </code>
          <a
            href={`https://explorer.stacks.co/txid/0x${t.txId}?chain=testnet`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>
              {`0x${t.txId.slice(0, 6)}…${t.txId.slice(-6)}`} @{" "}
              {t.date.toLocaleTimeString()}
            </code>
          </a>
        </p>
      ))}
    </div>
  );
};

export default AppTransactions;
