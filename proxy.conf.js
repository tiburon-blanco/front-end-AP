const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://52.14.161.48',
      secure: false,
      changeOrigin: true
    })
  );
};
