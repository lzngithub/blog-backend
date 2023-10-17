#!/bin/bash

# 进入项目文件
cd ../blog-vuepress || exit

# 拉取代码
git pull

# 安装依赖
yarn

# 打包项目
yarn build

cd ../deploy || exit

# 停止项目
pm2 stop fontend.js

# 重新启动项目
pm2 start fontend.js

echo '部署成功'
