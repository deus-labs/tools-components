import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import tailwind from 'tailwindcss';
import babel from "@rollup/plugin-babel";
import swc from "rollup-plugin-swc";
import postcssImport from 'postcss-import';

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
      },
      {
        file: packageJson.module,
        format: "esm",
      },
    ],
    plugins: [  
      resolve(),
      babel({
        babelHelpers: "bundled",
        extensions: [".ts", ".tsx"],
      }),
      peerDepsExternal(),
    
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extract: true,
        module: false,
        plugins: [
          tailwind({input: './index.css',
          config:"./tailwind.config.js", purge: true}),
          postcssImport()
        ],
        inject: {
          insertAt: "top",
        },
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      swc({
        jsc: {
            parser: {
                syntax: "typescript",
            },
            target: "es2018",
        },
      }),
      commonjs(),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
