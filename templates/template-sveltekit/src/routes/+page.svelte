<script>
  import ConnectWallet from "$lib/stacks/ConnectWallet.svelte";
  import ContractVote from "$lib/stacks/ContractVote.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>
    <span class="welcome">
      <picture>
        <source srcset="svelte-welcome.webp" type="image/webp" />
        <img src="svelte-welcome.png" alt="Welcome" />
      </picture>
    </span>

    SvelteKit + Stacks.js 👋
  </h1>

  <h2>
    try editing the Stacks.js code in <strong>src/lib/stacks/</strong> or the
    SvelteKit page template at <strong>src/routes/+page.svelte</strong>
  </h2>

  <!-- ConnectWallet file: `./src/lib/stacks/ConnectWallet.svelte` -->
  <ConnectWallet />

  <!-- ContractVote file: `./src/lib/stacks/ContractVote.svelte` -->
  <ContractVote />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    text-align: center;
  }

  h1 {
    width: 100%;
  }

  .welcome {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
