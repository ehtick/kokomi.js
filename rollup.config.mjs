import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default [
  // ESM
  {
    input: "src/index.ts",
    output: {
      file: "build/index.esm.js",
      format: "es",
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
    ],
  },

  // UMD
  {
    input: "src/index.ts",
    output: {
      name: "kokomi",
      file: "build/kokomi.umd.js",
      format: "umd",
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      terser(),
    ],
  },
];
