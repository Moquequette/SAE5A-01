module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/',
  devServer: {
    public: 'traefik.http.services.mushroompy.loadbalancer.server.port',
  },
};
