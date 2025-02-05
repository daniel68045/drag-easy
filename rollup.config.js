const typescript = require("@rollup/plugin-typescript");

module.exports = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/drag-easy.js",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/drag-easy.umd.js",
      format: "umd",
      name: "DragEasy",
      sourcemap: true,
    },
  ],
  plugins: [typescript()],
};
