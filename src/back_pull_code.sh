#!/bin/bash

# 进入项目文件
cd ../src || exit

git pull --force

echo '拉取代码成功'

yarn

echo '依赖安装成功'


