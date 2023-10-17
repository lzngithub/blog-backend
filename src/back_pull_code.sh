#!/bin/bash

# 进入项目文件
cd ../src || exit

git pull --force

yarn

echo '重新启动后端服务'

# 重新启动项目
pm2 restart backend.js

echo '后端服务更新成功'


