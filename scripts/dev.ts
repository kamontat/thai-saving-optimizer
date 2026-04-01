import { serve } from "bun";
import index from "../public/index.html";

const server = serve({
	development: true,
	routes: {
		"/*": index,
	},
	port: 3000,
	hostname: "0.0.0.0",
});

console.log(`Listening on ${server.url}`);
