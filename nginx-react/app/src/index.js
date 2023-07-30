// 必要なモジュールをインポートする
const http = require('http');

// サーバーを作成する
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

// サーバーを指定したポートでリッスンする
const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
