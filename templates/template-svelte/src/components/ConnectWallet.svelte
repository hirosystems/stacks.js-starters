<script>
  import { showConnectStatic } from "@stacks/connect";
  import { userSession } from "../stacksUserSession";

  export function authenticate() {
    showConnectStatic({
      appDetails: {
        name: "Stacks Svelte Starter",
        icon: window.location.origin + "/svelte.png",
      },
      redirectTo: "/",
      onFinish: () => {
        window.location.reload();
      },
      userSession,
    });
  }

  export function disconnect() {
    userSession.signUserOut("/");
  }
</script>

<div>
  {#if userSession.isUserSignedIn()}
    <button on:click={disconnect}> Disconnect Wallet </button>
    <p>mainnet: {userSession.loadUserData().profile.stxAddress.mainnet}</p>
    <p>testnet: {userSession.loadUserData().profile.stxAddress.testnet}</p>
  {:else}
    <button on:click={authenticate}> Connect Wallet </button>
  {/if}
</div>

<style>
  div {
    margin-top: 8px;
  }

  button {
    margin: 8px;
    background-color: #bbb;
    border: 2px solid #777;
    border-radius: 28px;
    font-size: 18px;
    padding: 16px 24px;
  }
</style>
