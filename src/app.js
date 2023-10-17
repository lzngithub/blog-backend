var http = require("http");
var handler = require("./front/index.js");
var handlerBack = require("./back/index.js");

http
  .createServer(function (req, res) {
    handler(req, res, function (err) {
      res.statusCode = 404;
      res.end("no such location");
      console.log(err);
      console.log("匹配不到路由咯");
      console.log("测试文本");
    });
    handlerBack(req, res, function (err) {
      res.statusCode = 404;
      res.end("no such location");
      console.log(err);
      console.log("测试文本front");
      console.log("匹配不到路由了,测试");
    });
  })
  .listen(3000, () => {
    console.log(new Date() + "：WebHook启动运行端口：", 3000);
  });
