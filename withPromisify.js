const grpc = require('@grpc/grpc-js');
const { ExampleClient } = require('./server/example_grpc_pb');
const { Request } = require('./server/example_pb');

const promisifyGrpc = (fn) => (req) => new Promise((resolve, reject) => {
  fn(req, (err, res) => {
    if (err) return reject(err)
    resolve(res);
  });
});

const client = new ExampleClient(
  'localhost:50051',
  grpc.credentials.createInsecure(),
);

const promisifiedTest = promisifyGrpc(client.test);

setInterval(() => {
  const request = new Request().setId(Math.floor(Math.random() * 10));

  promisifiedTest(request)
    .then((res) => console.log(res.getId()))
    .catch(err => console.log(err));
}, 1000);
