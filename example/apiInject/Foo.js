import { h, getCurrentInstance } from "../../lib/mini-vue.esm.js";
export const Foo = {
  name:"Foo",
  render() {
    return h("a", {}, "fooddddd");
  },
  setup() {
    const instance = getCurrentInstance();
    console.log('foo',instance);
  },
};
