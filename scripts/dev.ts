import index from '../public/index.html'

const server = Bun.serve({
  development: true,
  routes: {
    "/*": index
  },
  port: 3000,
  hostname: "127.0.0.1",
});

console.log(`Listening on ${server.url}`);
