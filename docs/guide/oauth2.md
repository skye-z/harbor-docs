# OAuth2 授权登陆

Harbor 支持接入 OAuth2 使用统一的账户进行登陆，但出于安全考虑，Harbor 不支持自动创建用户，如需使用授权登陆功能，请先进行绑定。

开启 OAuth2 后此处会出现一个灰色按钮，点此即可跳转 OAuth2 服务进行授权登陆。

![OAuth2](/image/oauth1.png)

## 接入配置

在设置页面中，有 OAuth2 卡片可进行接入配置，卡片如下图所示。

![OAuth2](/image/oauth2.png)

其中各个输入项:

* 应用编号: OAuth2 服务所提供的客户端编号，常用 **ClientId** 表示
* 应用密钥: 与上一项成对出现，常用 **ClientSecret** 表示
* 回调地址: 此处需要填写 Harbor 的地址，带上 HTTP 前缀和 `/oauth2/callback` 地址
* 执行鉴权: OAuth2 服务提供的授权发起地址，用户将被重定向到此地址
* 授权范围: 申请授权的权限范围
* 签发令牌: OAuth2 服务提供的令牌获取地址，可使用回调的校验码换取访问令牌
* 用户查询: OAuth2 服务提供的用户查询地址，可使用上一项获取的令牌查询用户信息
* 编号字段: 在用户查询返回的数据中能标识用户编号的字段名称
* 姓名字段: 在用户查询返回的数据中能标识用户姓名的字段名称

> 以下用是使用 Github 作为 OAuth2 服务提供方的示例 <br/>
> 授权发起地址为 `https://github.com/login/oauth/authorize` <br/>
> 申请权限范围为 `user:email` <br/>
> 令牌获取地址为 `https://github.com/login/oauth/access_token` <br/>
> 用户查询地址为 `https://api.github.com/user`

### 配置文件

上述配置在配置文件中如下所示

```ini
[oauth2]
enable=是否启用(0或1)
clientid=应用编号
clientsecret=应用密钥
redirecturl=回调地址
authurl=执行鉴权
scopes=授权范围(多个授权代码间用英文逗号分隔)
tokenurl=签发令牌地址
userurl=用户查询地址
useridkey=编号字段
usernamekey=姓名字段
```

## 绑定账户

使用账号密码登陆 Harbor，然后在“我的”窗口点击“授权绑定”按钮将 Harbor 账户与 OAuth2 账户进行关联。
