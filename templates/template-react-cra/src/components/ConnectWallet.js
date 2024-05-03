import { AppConfig, UserSession } from "@stacks/connect";
import { useConnect } from "@stacks/connect-react";

const appConfig = new AppConfig(["store_write", "publish_data"]);

export const userSession = new UserSession({ appConfig });

function disconnect() {
  userSession.signUserOut("/");
}

const ConnectWallet = () => {
  const { doAuth } = useConnect();

  if (userSession.isUserSignedIn()) {
    return (
      <div>
        <button className="Connect" onClick={disconnect}>
          Disconnect Wallet
        </button>
        <p>mainnet: {userSession.loadUserData().profile.stxAddress.mainnet}</p>
        <p>testnet: {userSession.loadUserData().profile.stxAddress.testnet}</p>
      </div>
    );
  }

  return (
    <button className="Connect" onClick={doAuth}>
      Connect Wallet
    </button>
  );
};

export default ConnectWallet;
