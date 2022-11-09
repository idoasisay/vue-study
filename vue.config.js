const { defineConfig } = require('@vue/cli-service');
const target = 'http://127.0.0.1:3000'; // proxty 요청을 보낼 서버 주소

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    proxy: {
      '^/api': {
        target,
        changeOrigin: true,
      },
    },
  },
});
