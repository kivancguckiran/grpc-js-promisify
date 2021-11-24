# grpc-js-promisify

## to reproduce

```sh
npm install
```

Run server first:

```sh
npm run server
```

Open another terminal.

Success without promisify:

```sh
npm run without
```

Error with promisify:

```sh
npm run with
```

### RESOLVED

Function utilized `this`. So we need to use function binding with `promisifyGrpc(client.test.bind(client))`;
