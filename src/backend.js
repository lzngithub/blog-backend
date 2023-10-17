var http = require('http');
var createHandler = require('github-webhook-handler');
var spawn = require('child_process').spawn;
var handler = createHandler({ path: '/pushCode', secret: 'liangzn' });
var handlerBack = createHandler({
  path: '/backPushCode',
  secret: 'liangzn',
});

http
  .createServer(function (req, res) {
    handler(req, res, function (err) {
      res.statusCode = 404;
      res.end('no such location');
    });
    handlerBack(req, res, function (err) {
      res.statusCode = 404;
      res.end('no such location');
    });
  })
  .listen(3000, () => {
    console.log(new Date() + 'WebHook启动运行端口：', 3000);
  });
//监听发生错误
handler.on('error', function (err) {
  console.error('Error:', err);
});

//监听push钩子 时触发函数
handler.on('push', function (event) {
  console.log('Received a push');
  console.log(event.payload.repository.name, event.payload.ref);
  const rumCommand = (cmd, args, callback) => {
    const child = spawn(cmd, args);
    let response = '';
    child.stdout.on('data', (buffer) => (response += buffer.toString()));
    child.stdout.on('end', () => callback(response));
  };
  if (event && event.payload && event.payload.ref === 'refs/heads/main') {
    console.log('开始自动构建');
    // 执行自动部署脚本
    rumCommand('sh', ['./front_auto_build.sh'], (txt) => {
      console.log('部署成功');
      console.log(txt);
    });
  } else {
    console.log('推送的不是main分支，不会触发自动构建');
  }
});

//监听发生错误
handlerBack.on('error', function (err) {
  console.error('Error:', err);
});

//监听push钩子 时触发函数
handlerBack.on('push', function (event) {
  console.log('收到一条更新来自：');
  console.log('仓库' + event.payload.repository.name);
  console.log('分支' + event.payload.ref);
  const rumCommand = (cmd, args, callback) => {
    const child = spawn(cmd, args);
    let response = '';
    child.stdout.on('data', (buffer) => (response += buffer.toString()));
    child.stdout.on('end', () => callback(response));
  };
  if (event && event.payload && event.payload.ref === 'refs/heads/main') {
    // 执行自动部署脚本
    console.log('开始执行脚本');
    rumCommand('sh', ['./back_pull_code.sh'], (txt) => {
      console.log('拉取代码成功');
      console.log(txt);
    });
  } else {
    console.log('推送的不是main分支');
  }
});
