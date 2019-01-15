module.exports = {
  devServer: {
    proxy: {
      "/api": {
        logLevel: "debug",
        target: "http://localhost:6200/api",
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].template = "src/index.html";
      return args;
    });
  }
};
