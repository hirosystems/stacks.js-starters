import { Buffer } from "@stacks/common";
// @ts-ignore
import App from "./App.svelte";

// @ts-ignore
window.Buffer = window.Buffer || Buffer;

const app = new App({
  target: document.getElementById("app"),
});

export default app;
