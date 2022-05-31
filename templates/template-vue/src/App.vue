<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

import StacksConnectWallet from './components/StacksConnectWallet.vue';
import StacksContractVote from './components/StacksContractVote.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Vue + Stacks.js 👋" />
      <div class="flex-center">
        <!-- StacksConnectWallet file: `./src/components/StacksConnectWallet.vue` -->
        <StacksConnectWallet />

        <!-- StacksContractVote file: `./src/components/StacksContractVote.vue` -->
        <StacksContractVote />
      </div>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.flex-center {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

header {
  line-height: 1.5;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
