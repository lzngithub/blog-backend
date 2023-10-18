const express = require('express'); //npm下载并引入express模块 npm -express -D
const path = require('path');

// ./dist 为vue打包后dist文件夹的路径
const filepath = path.join(
  __dirname,
  '../../../blog-vuepress/docs/.vuepress/dist'
);

const app = express();
app.use(express.static(filepath));
app.listen(80, function (err) {
  //80 监听80端口号
  if (err) {
    console.log(err);
  } else {
    console.log(new Date() + '前端项目启动成功', 80);
  }
});
