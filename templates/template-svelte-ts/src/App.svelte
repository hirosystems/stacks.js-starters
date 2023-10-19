<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import ConnectWallet from "./components/ConnectWallet.svelte";
  import ContractVote from "./components/ContractVote.svelte";
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>

  <h2>Svelte + Stacks.js 👋</h2>

  <!-- ConnectWallet file: `./src/components/ConnectWallet.svelte` -->
  <ConnectWallet />

  <!-- ContractVote file: `./src/components/ContractVote.svelte` -->
  <ContractVote />

  <p>
    Visit the Stacks.js
    <a
      class="Stacks"
      target="_blank"
      href="https://github.com/hirosystems/stacks.js">official repository</a
    >
    and <a class="Stacks" href="https://stacks.js.org">library reference</a> for
    more information.
  </p>

  <p>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
