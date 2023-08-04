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
      // setupState
      // this.$el
      // 这里的this.msg是调用setup后return的对象中的msg
      "hi " + this.msg
      // [
      //   h(
      //     "div",
      //     {
      //       class: "box2",
      //     },
      //     "hi div"
      //   ),
      //   h(
      //     "p",
      //     {
      //       class: "ppp",
      //     },
      //     "mini"
      //   ),
      // ]
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
