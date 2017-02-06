'use strict';

const proxy = require('tool-chain/proxy');
const express = require('express');
const path = require('path');

const app = express();

if (!/^prod(uction)?|prepub$/.test(process.env.NODE_ENV)) {
  require('./webpackware')(app);
  // require('./router.proxy')(app);
}

app.use('/', function (req, res, next) {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

const server = proxy.globalServer(app);
server.listen(app.get('proxyPort') || process.env.PORT || 8080, function () {
  console.log('Listening on %j', server.address());
});
