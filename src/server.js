import express from 'express';
import * as sapper from '@sapper/server';
import awsServerlessExpress from 'aws-serverless-express';

const app = express().use(sapper.middleware());
const server = awsServerlessExpress.createServer(app, () => console.log('listening...'));

export const handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
