<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";

import StacksConnectWallet from "./components/StacksConnectWallet.vue";
import StacksContractVote from "./components/StacksContractVote.vue";
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <div class="flex-center">
    <!-- StacksConnectWallet file: `./src/components/StacksConnectWallet.vue` -->
    <StacksConnectWallet />

    <!-- StacksContractVote file: `./src/components/StacksContractVote.vue` -->
    <StacksContractVote />
  </div>

  <p>
    Visit the Stacks.js
    <a
      class="Stacks"
      target="_blank"
      href="https://github.com/hirosystems/stacks.js"
      >official repository</a
    >
    and <a class="Stacks" href="https://stacks.js.org">library reference</a> for
    more information.
  </p>

  <HelloWorld />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
