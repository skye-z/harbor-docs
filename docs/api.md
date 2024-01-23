---
sidebar: false
---

# HTTP API 接口

接口鉴权方式: Token

令牌提交位置: 请求头 - Authorization

## 用户

### 登陆

地址: `/api/user/login`

方法: POST

### OAuth2 配置状态

地址: `/api/oauth2/state`

方法: GET

## 系统

### 获取宿主机信息

地址: `/api/device/info`

方法: GET

### 获取资源使用情况

地址: `/api/system/use`

方法: GET

### 获取容器引擎信息

地址: `/api/docker/info`

方法: GET

## 容器

### 获取容器列表

地址: `/api/container/list`

方法: GET

### 获取容器信息

地址: `/api/container/info`

方法: GET

### 获取容器日志

地址: `/api/container/logs`

方法: GET

### 启动容器

地址: `/api/container/start`

方法: GET

### 停止容器

地址: `/api/container/stop`

方法: GET

### 重启容器

地址: `/api/container/restart`

方法: GET

### 强行停止容器

地址: `/api/container/kill`

方法: GET

### 暂停容器

地址: `/api/container/pause`

方法: GET

### 从暂停中恢复容器

地址: `/api/container/unpause`

方法: GET

### 删除容器

地址: `/api/container/remove`

方法: GET

### 接入容器终端

地址: `/api/container/terminal`

方法: WebSocket

### 查询容器差异

地址: `/api/container/diff`

方法: GET

### 获取容器统计信息

地址: `/api/container/stat`

方法: GET

### 获取容器进程信息

地址: `/api/container/processes`

方法: GET

## 镜像

### 获取镜像列表

地址: `/api/image/list`

方法: GET

### 删除镜像

地址: `/api/image/remove`

方法: GET

### 拉取镜像

地址: `/api/image/pull`

方法: POST

### 标记镜像

地址: `/api/image/tag`

方法: GET

### 获取镜像构建信息

地址: `/api/image/history`

方法: GET

## 网络

### 获取网络列表

地址: `/api/network/list`

方法: GET

### 获取网络信息

地址: `/api/network/info`

方法: GET

### 创建网络

地址: `/api/network/create`

方法: GET

### 删除网络

地址: `/api/network/remove`

方法: GET

### 连接网络

地址: `/api/network/connect`

方法: GET

### 断开网络

地址: `/api/network/disconnect`

方法: GET

## 存储卷

### 获取存储卷列表

地址: `/api/volume/list`

方法: GET

### 获取存储卷信息

地址: `/api/volume/info`

方法: GET

### 创建存储卷

地址: `/api/volume/create`

方法: GET

### 删除存储卷

地址: `/api/volume/remove`

方法: GET
