import express from 'express';
import * as sapper from '@sapper/server';

const app = express().use(sapper.middleware());

export default app;
