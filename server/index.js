const grpc = require('@grpc/grpc-js');
const { ExampleService } = require('./example_grpc_pb');
const { Response } = require('./example_pb');

const getServer = () => {
  const server = new grpc.Server();

  server.addService(ExampleService, {
    test: (call, callback) => {
      const res = new Response().setId(call.request.getId());
      callback(null, res);
    },
  });

  return server;
}

const routeServer = getServer();

routeServer.bindAsync(
  '0.0.0.0:50051',
  grpc.ServerCredentials.createInsecure(),
  () => {
    routeServer.start();
    console.log('started');
  },
);
