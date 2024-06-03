const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/ServerIntegracao',
    createProxyMiddleware({
      target: 'https://equilibrioapperp.pontalsistemas.com.br',
      changeOrigin: true,
      secure: false, // Adicione esta linha se estiver enfrentando problemas com certificados SSL autoassinados
    })
  );
};

