# 快速开始

## 一键安装(推荐)

请复制下方命令到服务器终端中执行，脚本提供了 Harbor 的安装、卸载于开启自启设置服务。

```shell
bash -c "$(curl -fsSL https://skye-z.github.io/harbor/install.sh)"
```

安装完成后将会自动运行。

首次运行 Harbor 会自动生成管理账户，密码将输出在日志中，如下所示:

```txt
2024/01/01 00:00:00 [Tips] create default admin，password is ..........
```

至此安装已全部完成，请访问 **12800** 端口登陆 Harbor。

## 手动安装

### 下载 Harbor

请访问[releases](https://github.com/skye-z/harbor/releases)下载最新的可执行文件。

### 上传至服务器

请将上一步下载的可执行文件上传至服务器中。

### 授予执行权限

然后在可执行文件所在目录下运行下方的命令。

```shell
chmod +x ./harbor
```

### 前台运行初始化

请执行下方命令运行 Harbor，初始化完成后会在日志中输出管理密码。

```shell
./harbor
```

### 后台运行

获取到管理密码后即可转为后台运行。

```shell
nohup ./harbor &
```
