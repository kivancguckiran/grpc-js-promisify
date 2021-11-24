const grpc = require('@grpc/grpc-js');
const { ExampleClient } = require('./server/example_grpc_pb');
const { Request } = require('./server/example_pb');

const client = new ExampleClient(
  'localhost:50051',
  grpc.credentials.createInsecure(),
);

setInterval(() => {
  const request = new Request().setId(Math.floor(Math.random() * 10));

  client.test(request, (err, res) => {
    if (err) return console.log(err);
  
    console.log(res.getId());
  });
}, 1000);
