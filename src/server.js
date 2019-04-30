import polka from 'polka';
import * as sapper from '@sapper/server';

const app = polka();

app.use(sapper.middleware()); // .listen(3000);

export default app;
