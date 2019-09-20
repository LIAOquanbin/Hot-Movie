const path = require("path");
module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "src/scss/*.scss")]
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://39.97.33.178",
        changeOrigin: true
      }
    }
  }
};
