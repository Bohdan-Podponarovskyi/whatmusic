const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api.musixmatch.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            }
            // onProxyReq: (proxyReq, req, res) => {
            //     console.log('Proxy request:', req.url);
            // }
        })
    );
};