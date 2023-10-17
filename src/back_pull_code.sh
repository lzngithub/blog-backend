#!/bin/bash

# 进入项目文件
cd ../src || exit

git pull --force

yarn

# 停止项目
pm2 stop backend.js

# 重新启动项目
pm2 start backend.js

echo '后端服务更新成功'


