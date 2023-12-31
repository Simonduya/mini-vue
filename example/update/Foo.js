import { h } from "../../lib/mini-vue.esm.js";
export const Foo = {
  setup(props, { emit }) {
    const emitAdd = (args) => {
      console.log("emit add");
      emit("add");
    };
    return {
      emitAdd,
    };
  },
  render() {
    const btn = h(
      "button",
      {
        onClick: this.emitAdd,
      },
      "emitAdd"
    );

    const foo = h("p", {}, "foo");
    return h("div", {}, [foo, btn]);
  },
};
