// scp2使用示例
let client = require('scp2');

client.scp(
  '../deploy',
  {
    host: 'xxx',
    username: 'xxx',
    password: 'xxx',
    path: '/opt/node/fontend/blog/blog-backend',
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('上传成功');
    }
  }
);
