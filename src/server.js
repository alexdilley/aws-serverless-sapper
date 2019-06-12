import polka from 'polka';
import * as sapper from '@sapper/server';

const app = polka().use(sapper.middleware());

export default app;
