// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var example_pb = require('./example_pb.js');

function serialize_example_Request(arg) {
  if (!(arg instanceof example_pb.Request)) {
    throw new Error('Expected argument of type example.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_Request(buffer_arg) {
  return example_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_Response(arg) {
  if (!(arg instanceof example_pb.Response)) {
    throw new Error('Expected argument of type example.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_Response(buffer_arg) {
  return example_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExampleService = exports.ExampleService = {
  test: {
    path: '/example.Example/Test',
    requestStream: false,
    responseStream: false,
    requestType: example_pb.Request,
    responseType: example_pb.Response,
    requestSerialize: serialize_example_Request,
    requestDeserialize: deserialize_example_Request,
    responseSerialize: serialize_example_Response,
    responseDeserialize: deserialize_example_Response,
  },
};

exports.ExampleClient = grpc.makeGenericClientConstructor(ExampleService);
