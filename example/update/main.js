import { createApp } from "../../lib/mini-vue.esm.js";
import { App } from "./App.js";
// createApp(App).mount("#app");

const rootContainer = document.querySelector("#app");
createApp(App).mount(rootContainer);
