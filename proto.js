const os = require('os');
const path = require('path');
const shell = require('shelljs');

const proto = path.join(__dirname, 'server');
const model= path.join(__dirname, 'server');

let nodeProtocPath = path.join(__dirname, 'node_modules/.bin/grpc_tools_node_protoc');

if (os.platform() === 'win32') {
  nodeProtocPath = `${nodeProtocPath}.cmd`;
}

shell.exec(`${nodeProtocPath} `
+ `--js_out="import_style=commonjs,binary:${model}" `
+ `--grpc_out="grpc_js:${model}" `
+ `--proto_path ${proto} ${proto}/*.proto`);
