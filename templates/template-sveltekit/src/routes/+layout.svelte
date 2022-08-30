<script>
  import Counter from "$lib/Counter.svelte";
  import Header from "$lib/header/Header.svelte";
  import "../app.css";
</script>

<Header />

<main>
  <slot />
</main>

<footer>
  <p>
    visit <a href="https://docs.hiro.so" class="stacks">docs.hiro.so</a> to
    learn more about developing on Stacks
    <br />
    visit
    <a href="https://github.com/hirosystems/stacks.js" class="stacks"
      >the official Stacks.js repo</a
    >
    for more examples
    <br />
    visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
  </p>

  <div class="counter">
    SvelteKit Example Component
    <Counter />
  </div>
</footer>

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }

  footer a {
    font-weight: bold;
  }

  footer a.stacks {
    color: #7532d9;
  }

  @media (min-width: 480px) {
    footer {
      padding: 40px 0;
    }
  }
</style>
