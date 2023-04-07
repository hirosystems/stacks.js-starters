const AppIntro = () => {
  return (
    <div className="frame">
      <h2>Stacks.js Demo 👋</h2>
      <p>
        This starter walks-through the basic functionality provided by{" "}
        <code>Stacks.js</code>
      </p>
      <p>
        Start by editing the components in <code>src/tabs/</code>
      </p>
      <span>
        <a
          className="AppIntro-link"
          href="https://docs.hiro.so/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Hiro Docs
        </a>
        <a
          className="AppIntro-link"
          href="https://stacks.js.org/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Stacks.js Reference
        </a>
        <p>
          Some features require tokens to execute. All the features shown here
          are configured to use the <code>testnet</code>. You can get free
          testnet-STX tokens from the{" "}
          <a
            href="https://explorer.hiro.so/sandbox/faucet?chain=testnet"
            target="_blank"
            rel="noopener noreferrer"
          >
            Faucet in the Stacks Explorer
          </a>
          .
        </p>
      </span>
    </div>
  );
};

export default AppIntro;
