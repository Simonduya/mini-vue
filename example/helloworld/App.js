import { h } from "../../lib/mini-vue.esm.js";
export const App = {
  // ui
  render() {
    return h(
      "div",
      {
        id: "root",
        class: ["red", "box"],
      },
      // "hi " + this.msg
      [
        h(
          "div",
          {
            class: "box2",
          },
          "hi div"
        ),
        h(
          "p",
          {
            class: "ppp",
          },
          "mini"
        ),
      ]
    );
  },
  //
  setup() {
    // composition api
    return {
      msg: "mini-vue",
    };
  },
};
