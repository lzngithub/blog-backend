const createHandler = require('github-webhook-handler');
const spawn = require('child_process').spawn;
const path = require('path');

const handler = createHandler({
  path: '/backPushCode',
  secret: 'liangzn',
});
// 获取当前文件的绝对路径
const filepath = path.join(__dirname, './deploy.sh');

//监听发生错误
handler.on('error', function (err) {
  console.error('Error:', err);
});

//监听push钩子 时触发函数
handler.on('push', function (event) {
  console.log('back');
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
    rumCommand('sh', [filepath], (txt) => {
      console.log(txt);
    });
  } else {
    console.log('推送的不是main分支');
  }
});

module.exports = handler;
