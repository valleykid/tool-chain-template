'use strict';

const proxy = require('tool-chain/proxy');

module.exports = function(app) {
  app.use(proxy.wpdev());
  app.use(proxy.wphot());
  app.use(proxy.wpcors());
  app.set('proxyPort', proxy.port);
  const livereloadjs = proxy.livereload();
  app.use(function(req, res, next){
    res.locals.livereloadjs = livereloadjs;
    next();
  });
};
