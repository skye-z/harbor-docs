# 最小化

如果运行设备内存宽裕但存储不足，可以使用 UPX 压缩 `Harbor`。

```shell
upx -9 harbor-linux-amd64
```

将上方的 `harbor-linux-amd64` 替换为已安装的 `Harbor` 可执行文件名称后执行。

这样可以减少大约 60% 的存储占用，但相对的会增加 15% 的内存占用。

正常情况下不建议压缩 `Harbor`，因为内存比存储更加珍贵。
