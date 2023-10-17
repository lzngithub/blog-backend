const express = require('express'); //npm下载并引入express模块 npm -express -D

const app = express();
app.use(express.static('../../blog-vuepress/docs/.vuepress/dist')); // ./dist 为vue打包后dist文件夹的路径
app.listen(80, function (err) {
  //80 监听80端口号
  if (err) {
    console.log(err);
  } else {
    console.log(new Date() + '前端项目启动成功');
  }
});
