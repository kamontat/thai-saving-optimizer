import { join } from 'node:path';

const cwd = process.cwd();
const output = await Bun.build({
  entrypoints: [join(cwd, "public/index.html")],
  target: "browser",
  outdir: join(cwd, "dist"),
  minify: true,
  sourcemap: "linked",
});

console.log(output.logs.map(l => `${l.level}: ${l.name} - ${l.message}`).join("\n"));
if (output.success) {
  console.log("\nBuild succeeded");
} else {
  console.error("\nBuild failed!");
}
