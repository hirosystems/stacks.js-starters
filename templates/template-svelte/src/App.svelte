<script>
  import logo from "./assets/svelte.png";
  import Counter from "./lib/Counter.svelte";

  import ConnectWallet from "./components/ConnectWallet.svelte";
  import ContractVote from "./components/ContractVote.svelte";
</script>

<main>
  <img src={logo} alt="Svelte Logo" />
  <h1>Svelte + Stacks.js 👋</h1>

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

  <hr />

  <Counter />

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }

  :global(button) {
    color: #111;
    font-size: 18px;
    font-weight: bold;
  }

  :global(button:hover) {
    filter: brightness(1.1);
  }

  hr {
    border: none;
    border-top: 1px solid #dfdfdf;
    margin-bottom: 64px;
  }
</style>
