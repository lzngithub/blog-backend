#!/bin/bash

# 进入项目文件
cd ../../../blog-backend || exit

git pull --force

yarn

cd ./src || exit

echo '重新启动后端服务'

# 重新启动项目
pm2 restart app.js

echo '后端服务更新成功'


