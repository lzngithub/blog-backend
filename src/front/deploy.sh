#!/bin/bash

echo '进入脚本'

# 进入到脚本所在的目录
cd "$(dirname "$0")"

# 进入项目文件
cd ../../../blog-vuepress || exit

pwd

# 拉取代码
git pull --force

# 安装依赖
yarn

# 打包项目
yarn build

# 进入到脚本所在的目录
cd "$(dirname "$0")"

echo '重新启动前端服务'

pm2 restart server.js

echo '前端服务更新成功'
