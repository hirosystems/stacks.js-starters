// import { useConnect } from "@stacks/connect-react";
import React from "react";
import { showConnect } from "@stacks/connect";
import { userSession } from "../userSession";

function authenticate() {
  showConnect({
    appDetails: {
      name: "Stacks Template",
      icon: window.location.origin + "/logo.png",
    },
    redirectTo: "/",
    onFinish: () => {
      window.location.reload();
    },
    userSession,
  });
}

function disconnect() {
  userSession.signUserOut("/");
}

const ConnectWallet = () => {
  // load account address if wallet connected
  const isUserSignedIn = userSession.isUserSignedIn();
  const address = isUserSignedIn
    ? userSession.loadUserData().profile.stxAddress.testnet
    : "";
  const truncatedAddress = `${address.slice(0, 4)}…${address.slice(-4)}`;

  return (
    <div className="tab">
      {/* intro */}
      <h2>Connecting a Wallet</h2>
      <p>
        First we need to connect a Stacks wallet using the{" "}
        <code>@stacks/connect</code> package. Calling <code>showConnect</code>{" "}
        (used by the "Connect Wallet" button below) will trigger the wallet
        popup to open and allow you to select an account.
      </p>
      {/* example */}
      <div className="frame">
        {isUserSignedIn ? (
          <p>Wallet is currently connected! 🎉</p>
        ) : (
          <p>Wallet is currently NOT connected!</p>
        )}
        <hr />
        <br />
        <button onClick={authenticate}>Connect Wallet</button>
        <br />
        <br />
        <button onClick={disconnect}>Disconnect Wallet</button>
        <p>
          <strong>isUserSignedIn:</strong>{" "}
          <code>{isUserSignedIn.toString()}</code>
        </p>
        <p>
          <strong>address</strong>: <code>{truncatedAddress}</code>
        </p>

        {/* file name */}
        <small>
          <code>tabs/ConnectWallet.js</code>
        </small>
      </div>
    </div>
  );
};

export default ConnectWallet;
