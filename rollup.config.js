import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/drag-easy.js",
      format: "umd",
      name: "DragEasy",
      sourcemap: true,
    },
    {
      file: "dist/drag-easy.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [typescript()],
};
