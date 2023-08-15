import { h } from "../../lib/mini-vue.esm.js";
import ArrayToText from "./ArrayToText.js"
import TextToText from "./TextToText.js"
export const App = {
  name: "App",
  setup() {
    return {};
  },
  render() {
    return h("div", {}, [
      h("p", {}, "主页"),
      h(ArrayToText),
      // h(TextToArray),
      // h(ArrayToArray),
      // h(TextToText),
    ]);
  },
};
