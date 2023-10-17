#!/bin/bash

# 进入项目文件
cd ../../../blog-vuepress || exit

# 拉取代码
git pull --force

# 安装依赖
yarn

# 打包项目
yarn build

cd ../blog-backend/src/front || exit

echo '重新启动前端服务'

pm2 restart frontServer.js

echo '前端服务更新成功'
