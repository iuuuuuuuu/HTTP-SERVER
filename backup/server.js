// 1.导入 http 模块
const http = require('http');
const url = require('url');

// 2.创建一个 http 服务器
const server = http.createServer();
server.listen(8080, () => {
  console.log('服务器启动成功 http://127.0.0.1:8080');
});

server.on('request', (req, res) => {
  // 3.接收请求
  // 4.处理请求
  // 5.发送响应
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  const { method } = req;
  const { pathname, query } = url.parse(req.url, true);
  console.log(pathname);

  switch (method) {
    case 'GET': {
      console.log(query);
      res.end('hello world!你好世界!');
      break;
    }
    case 'POST': {
      let chunks;
      req.on('data', (buffer) => {
        chunks += buffer;
      });
      req.on('end', () => {
        console.log(require('querystring').parse(chunks));
      });
      break;
    }
  }
});
