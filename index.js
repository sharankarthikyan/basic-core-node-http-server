const http = require('http');

const PORT = 3000;

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/plain',
//   });

//   //   res.end('Hello!!');
//   res.end(
//     JSON.stringify({
//       id: 1,
//       name: 'sharan',
//     })
//   );
// });

// Using event listeners
server.on('request', (req, res) => {
  // req contains methods body and many, ZTM - Node JS  ## REFFERENCE. He solved many things.
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });

  //   res.end('Hello!!');
  res.end(
    JSON.stringify({
      id: 1,
      name: 'sharan',
    })
  );
});

server.listen(PORT, () => {
  console.log(`Listening ${PORT}....`);
});
