<script setup lang="ts">
import { openContractCall } from "@stacks/connect";
import { StacksTestnet } from "@stacks/network";
import {
  AnchorMode,
  PostConditionMode,
  stringUtf8CV,
} from "@stacks/transactions";
import { userSession } from "../stacksUserSession";

function vote(pick) {
  openContractCall({
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
          `https://explorer.hiro.so/txid/${data.txId}?chain=testnet`,
          "_blank"
        )
        .focus();
    },
    onCancel: () => {
      console.log("onCancel:", "Transaction was canceled");
    },
  });
}
</script>

<template>
  <div v-if="userSession.isUserSignedIn()">
    <p>Vote via Smart Contract</p>
    <button @click="vote('🍊')">Vote for 🍊</button>
    <button @click="vote('🍎')">Vote for 🍎</button>
  </div>
</template>

<style scoped>
div {
  margin-top: 16px;
}

button {
  background-color: rgba(148, 48, 148, 0.2);
  border: 2px solid rgb(148, 48, 148);
  border-radius: 14px;
  padding: 8px 12px;
  margin: 4px;
}
</style>
