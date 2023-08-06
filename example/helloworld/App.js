import { h } from "../../lib/mini-vue.esm.js";
import { Foo } from "./Foo.js";
window.self = null;
export const App = {
  name: "App",
  // ui
  render() {
    window.self = this;
    return h(
      "div",
      {
        id: "root",
        class: ["red", "box"],
        onClick: () => {
          alert(666);
        },
      },
      // setupState
      // this.$el
      // 这里的this.msg是调用setup后return的对象中的msg
      [
        h("div", {}, "hi, " + this.msg),
        h(Foo, {
          count: 1,
        }),
      ]
    );
  },
  //
  setup() {
    // composition api
    return {
      msg: "mini-vue-hhh",
    };
  },
};
