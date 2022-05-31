<script setup>
import { showConnectStatic } from "@stacks/connect";
import { userSession } from '../stacksUserSession';

function authenticate() {
  showConnectStatic({
    appDetails: {
      name: "Stacks Vue Starter",
      icon: window.location.origin + "/logo277.png",
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
</script>

<template>
  <div v-if="userSession.isUserSignedIn()">
    <button @click="disconnect">
      Disconnect Wallet
    </button>
    <p>mainnet: {{ userSession.loadUserData().profile.stxAddress.mainnet }}</p>
    <p>testnet: {{ userSession.loadUserData().profile.stxAddress.testnet }}</p>
  </div>
  <div v-else>
    <button @click="authenticate">
      Connect Wallet
    </button>
  </div>
</template>

<style scoped>
div {
  margin-top: 8px;
}

button {
  margin: 8px;
  background-color: #222;
  border: 2px solid #777;
  border-radius: 28px;
  font-size: 18px;
  padding: 16px 24px;
}
</style>
