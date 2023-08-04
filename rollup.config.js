import typescript from "@rollup/plugin-typescript";
export default {
  input: "./src/index.ts",
  output: [
    //打包出多种模块规范
    // 1. cjs
    // 2. esm
    {
      format: "cjs",
      file: "lib/mini-vue.cjs.js",
    },
    {
      format: "esm",
      file: "lib/mini-vue.esm.js",
    },
  ],
// rollup不认识ts, 需要使用一些插件进行编译
// yarn add @rollup/plugin-typescript --dev
  plugins:[
    typescript()
  ]
};
