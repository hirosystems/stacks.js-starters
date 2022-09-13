import { useConnect } from "@stacks/connect-react";
import { StacksTestnet } from "@stacks/network";
import {
  AnchorMode,
  PostConditionMode,
  stringUtf8CV,
} from "@stacks/transactions";
import { userSession } from "./ConnectWallet";

const ContractCallVote = () => {
  const { doContractCall } = useConnect();

  function vote(pick) {
    doContractCall({
      network: new StacksTestnet(),
      anchorMode: AnchorMode.Any,
      contractAddress: "ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK",
      contractName: "example-fruit-vote-contract",
      functionName: "vote",
      functionArgs: [stringUtf8CV(pick)],
      postConditionMode: PostConditionMode.Deny,
      postConditions: [],
      onFinish: (data) => {
        console.log("onFinish:", data);
        window
          .open(
            `https://explorer.stacks.co/txid/${data.txId}?chain=testnet`,
            "_blank"
          )
          .focus();
      },
      onCancel: () => {
        console.log("onCancel:", "Transaction was canceled");
      },
    });
  }

  if (!userSession.isUserSignedIn()) {
    return null;
  }

  return (
    <div>
      <p>Vote via Smart Contract</p>
      <button className="Vote" onClick={() => vote("🍊")}>
        Vote for 🍊
      </button>
      <button className="Vote" onClick={() => vote("🍎")}>
        Vote for 🍎
      </button>
    </div>
  );
};

export default ContractCallVote;
