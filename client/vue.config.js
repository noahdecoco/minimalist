module.exports = {
  devServer: {
    proxy: {
      "/api": {
        logLevel: "debug",
        target: "http://localhost:6200/api",
        changeOrigin: true
      }
    }
  }
};
