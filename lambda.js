'use strict'
const awsServerlessExpress = require('aws-serverless-express');
const app = require('./__sapper__/build');

const server = awsServerlessExpress.createServer(app.handler, () => console.log('listening...'));

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
