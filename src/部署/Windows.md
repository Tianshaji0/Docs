---
title: Windows部署
icon: fab fa-windows
order: 2
---

::: tip 温馨提示
本教程适用于 Windows 系统下部署 GSManager 面板，建议优先使用国内下载源，安装过程如遇问题可前往常见问题页面查阅。
:::

## 🚀 一、下载文件

1. 下载 [Python](https://www.python.org/downloads/windows/) 并完成安装。
2. 下载 GSManager：
   - [国内下载源](http://langlangy.server.xiaozhuhouses.asia:8082/disk1/GSM3/gsm3-management-panel-windows.zip)
   - [GitHub](https://github.com/GSManagerXZ/GameServerManager/releases/latest)

## 📤 二、上传与解压文件

1. 安装 Python 时，务必勾选如下两个选项：
   ![](http://langlangy.server.xiaozhuhouses.asia:40061/i/2025/07/20/u17lk0.png)
2. 解压 GSManager 面板压缩包至任意目录。

## 🛠️ 三、安装 Python 依赖库

1. 双击面板目录下的 `install-python-deps.bat` 文件，自动安装所需依赖。
2. 安装完成后，双击 `start.bat` 启动面板。

::: warning 注意
如遇依赖安装失败，请检查 Python 是否正确添加到环境变量。
:::

## 🌐 访问面板

在浏览器输入：`面板所在IP:3001`（默认端口为 3001）即可访问。

## ⚙️ 如何修改端口

编辑 `server/.env` 文件中的端口号，保存后重启面板即可生效。

## 🚫 无法访问面板？

::: warning 防火墙设置
Windows 默认开启防火墙，需要进行以下配置：

1. 打开 Windows Defender 防火墙设置
2. 允许面板程序通过防火墙
3. 或临时关闭防火墙（不推荐）

![Windows防火墙设置](http://langlangy.server.xiaozhuhouses.asia:40061/i/2025/07/20/u6apvm.png)
:::

::: tip 特殊环境配置
- 云服务器：
  - 确保已在安全组中开放面板端口(TCP协议)
  - 检查服务商防火墙设置

- NAT转发服务器：
  - 内网端口需设置为面板端口
  - 使用外部映射端口进行访问
:::
