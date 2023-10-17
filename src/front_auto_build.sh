#!/bin/bash

# 进入项目文件
cd ../../blog-vuepress || exit

# 拉取代码
git pull --force

# 安装依赖
yarn

# 打包项目
yarn build

cd ../blog-backend/src || exit

# 停止项目
pm2 stop frontend.js

# 重新启动项目
pm2 start frontend.js

echo '前端服务更新成功'
