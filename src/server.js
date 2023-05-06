import express from 'express';
import configsViewEngine from './configs/viewEngine';
import initWebRoute from './route/web'
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

configsViewEngine(app);
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})