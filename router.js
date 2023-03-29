const url = require('url');
const controller = require('./controller');

module.exports = (req, res) => {
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
        res.end('hello world!你好世界!');
      });
      break;
    }
  }
};
