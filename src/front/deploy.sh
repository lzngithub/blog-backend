#!/bin/bash

echo '进入脚本'

# 进入到脚本所在的目录
cd "$(dirname "$0")"

pwd

# 进入项目文件
cd ../../../blog-vuepress || exit

# 拉取代码
git pull --force

# 安装依赖
yarn

# 打包项目
yarn build

# 进入到脚本所在的目录
cd "$(dirname "$0")"

echo '重新启动前端服务'

pm2 restart server.js --name="front"

echo '前端服务更新成功'
