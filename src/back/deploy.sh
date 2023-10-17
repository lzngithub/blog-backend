#!/bin/bash

# 进入项目文件
echo '进入脚本'

# 进入到脚本所在的目录
cd "$(dirname "$0")"

pwd

cd ../../ || exit

git pull --force

yarn

# cd ./src || exit

echo '重新启动后端服务'

# 重新启动项目
pm2 restart ./src/app.js --name="back"

echo '后端服务更新成功'


