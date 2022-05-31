import { createApp } from "vue";
import App from "./App.vue";

import { Buffer } from "@stacks/common";

window.Buffer = window.Buffer || Buffer;

createApp(App).mount("#app");
