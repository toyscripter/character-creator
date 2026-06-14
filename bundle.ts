import * as esbuild from "npm:esbuild@^0.24.0";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader@^0.11.0";

await esbuild.build({
  plugins: [...denoPlugins()],
  entryPoints: ["./main.ts"],
  outfile: "./dist/main.js",
  bundle: true,
  minify: true,
  sourcemap: true,
  format: "iife",
});

console.log(`main.ts bundled.`);

esbuild.stop();
