import { h, ref, getCurrentInstance, nextTick } from "../../lib/mini-vue.esm.js";
export const App = {
  name: "App",
  setup() {
    let instance = getCurrentInstance();
    const count = ref(1);
    function onClick() {
      for (let i = 0; i < 100; i++) {
        console.log("update");
        count.value = i;
      }
      debugger
      console.log(instance);
      nextTick(() => {
        console.log(instance);
      })
      // await nextTinck()
      // console.log(instance);
    }
    return {
      onClick,
      count
    };
  },
  render() {
    const button = h("button", { onClick: this.onClick }, "update");
    const p = h("p", {}, "count: " + this.count)
    return h("div", {}, [button, p]);
  },
};
