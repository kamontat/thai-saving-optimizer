import { join } from "node:path";
import tailwind from "bun-plugin-tailwind";

async function build() {
	const cwd = process.cwd();
	const plugins = [tailwind];

	return Bun.build({
		entrypoints: [join(cwd, "public/index.html")],
		target: "browser",
		outdir: join(cwd, "dist"),
		minify: true,
		sourcemap: "linked",
		plugins,
	});
}

const output = await build();

console.log(
	output.logs.map((l) => `${l.level}: ${l.name} - ${l.message}`).join("\n"),
);
if (output.success) {
	console.log("\nBuild succeeded");
} else {
	console.error("\nBuild failed!");
}
