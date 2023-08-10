import { h, provide, inject } from "../../lib/mini-vue.esm.js";
const Provider = {
  name: "Provider",
  setup() {
    provide("foo", "fooVal");
    provide("bar", "barVal");
  },
  render() {
    return h("div", {}, [h("p", {}, "Provider demo"), h(ProviderTwo)]);
  },
};
const ProviderTwo = {
  name: "ProviderTwo",
  setup() {
    provide("foo", "fooTwo");
    // provide("bar", "barVal");
    const foo = inject("foo");
    return {
      foo,
    };
  },
  render() {
    return h("div", {}, [
      h("p", {}, `ProviderTwo foo:${this.foo}`),
      h(Consumer),
    ]);
  },
};
const Consumer = {
  name: "Consumer",
  setup() {
    const foo = inject("foo");
    const bar = inject("bar");
    const baz = inject("baz", "bazDefault");
    const bac = inject("baz", () => "bac func");

    return {
      foo,
      bar,
      baz,
      bac
    };
  },

  render() {
    return h(
      "div",
      {},
      `Consumer: - ${this.foo} - ${this.bar} - ${this.baz} - ${this.bac}`
    );
  },
};

export const App = {
  name: "App",
  setup() {},
  render() {
    return h("div", {}, [h("p", {}, "apiInject"), h(Provider)]);
  },
};
