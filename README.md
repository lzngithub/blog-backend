# node 自动化部署项目

## 项目描述

node 结合 Webhooks 自动化部署的个人实践，进程管理使用 pm2，简单易上手，前端静态服务使用的 express 启动，是 blog-vuepress 的后端服务项目。

## 技术栈

scp2 + express + pm2 + github-webhook-handler

## 模块划分

服务器部署两个 node 服务，一个后端，一个前端的，其实可以只部署一个服务的，但区分开会更清晰一点。

当前端项目的 main 分支代码有更新的时候，通过 github 的 Webhooks 给后端服务发送通知，后端服务收到消息，通过运行自动化部署脚本(front/deploy.sh)进行前端服务的部署更新。

当后端项目的 main 分支代码有更新的时候，通过 github 的 Webhooks 给后端服务发送通知，后端服务收到消息，通过运行自动化部署脚本(back/deploy.sh)进行后端服务的部署更新。

node.js 是单进程，进程被杀死后整个服务就跪了，通过进程管理工具 pm2 进行管理。

## 项目意义

- 可以自动化部署的自己的网站，不用每次手动更新。
- 可以多接触学习一些网站部署的知识。
- 通过此学习 node 的一些知识。
- 同时可以通过此熟悉 linux 系统的环境和命令。

## 相关命令

基于前端服务，后端也一样，改对应的服务名就好

手动部署

```shell
bash deploy.sh
```

查看日志

```shell
pm2 log server
```

开始服务

```shell
pm2 start server
```

停止服务

```shell
pm2 stop server
```

重启服务

```shell
pm2 restart server
```

产看所有进程

```shell
pm2 list
```

杀死所有进程

```shell
pm2 kill
```
