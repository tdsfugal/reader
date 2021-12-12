const { server } = require("./server");

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
