# 兼容性

## 服务器

Harbor 仅支持 `Linux` 和 `MacOS`。

支撑 Harbor 运行需要最少1个 `500Mhz` 的CPU核心和最低 `30MB` 的内存。

Harbor 可以在下列平台运行:

* x86: 32位、64位
* ARM: 32位、64位
* MIPS(大端/小端): 32位、64位
* PowerPC(大端/小端): 64位
* Risc-V: 64位
* IBM-Z: 64位

除 x86 和 ARM 其他需自行使用下方命令编译。

```shell
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o harbor -ldflags '-s -w'
```

命令中的 `GOOS` 是系统，`GOARCH` 是架构，替换这两个参数后执行即可打包编译。

## 浏览器

Harbor UI 不支持 IE 浏览器！！！

已确认支持的浏览器有 `Edge`、`Firefox`、`Chrome`和`Safari`。

从技术上讲，Harbor UI 可以在大部分现代浏览器不算太老(比如 2 年内的版本)的版本上运行，但由于开发资源不足，仅在 `Edge` 上进行了测试。
