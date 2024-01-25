# 快速开始

## 在线安装(推荐)

请复制下方命令到服务器终端中执行，脚本提供了 Harbor 的安装、卸载与开启自启设置服务。

```shell
bash -c "$(curl -fsSL https://skye-z.github.io/harbor/install.sh)"
```

安装完成后将会自动运行。

首次运行 Harbor 会自动生成管理账户，密码将输出在日志中，如下所示:

```txt
2024/01/01 00:00:00 [Tips] create default admin，password is ..........
```

至此安装已全部完成，请访问 **12800** 端口登陆 Harbor。

## 离线安装

### 下载 Harbor 安装文件

请访问[releases](https://github.com/skye-z/harbor/releases)下载最新的可执行文件。

然后访问[install.sh](https://github.com/skye-z/harbor/blob/main/install.sh)下载安装脚本。

### 上传至服务器

请将上一步下载的可执行文件上传至服务器中。

### 执行安装脚本

务器终端中执行，脚本提供了 Harbor 的安装、卸载与开启自启设置服务。

```shell
bash ./install.sh
```

执行后请选择脚本菜单中的第二项`Install Harbor (Offline)`。

至此后续的内容与在线安装一致。
