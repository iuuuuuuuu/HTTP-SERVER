// 1.导入 http 模块
const http = require('http');
const router = require('./router');
// 2.创建一个 http 服务器
const server = http.createServer();
server.listen(8080, () => {
  console.log('服务器启动成功 http://127.0.0.1:8080');
});

server.on('request', (req, res) => {
  router(req, res);
});
