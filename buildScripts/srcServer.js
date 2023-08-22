import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function (req, res) {
  res.json([
    { "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "test@null.com"},
    { "id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "test2@null.com"},
    { "id": 3, "firstName": "Tina", "lastName": "Lee", "email": "test2@null.com"},
  ]);
});

app.listen(port, function (error) {
  if (error) {
    console.log(error);
  } else {
    open('http:localhost:' + port);
  }
});
