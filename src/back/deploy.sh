#!/bin/bash

# 进入项目文件
echo '进入脚本'
pwd
# cd ../../../blog-backend || exit

git pull --force

yarn

# cd ./src || exit

echo '重新启动后端服务'

# 重新启动项目
pm2 restart ./src/app.js

echo '后端服务更新成功'


