---
title: Docker部署
icon: fab fa-docker
order: 4
---

::: tip 提示
GSManager3中采用的仍然是游戏容器，拥有绝大部分的游戏运行库，所有游戏都跑在容器中，所以镜像大小会比较大，需要对Docker需要具备基础知识。建议搭配[1panel](https://1panel.cn/)面板进行使用
:::

## 拉取镜像
### 在线拉取

### 离线下载

## 创建docker-compose.yml
准备一个目录 在这个目录下创建文件`docker-compose.yml`
```yml
volumes:
  gsm3_data:
    driver: local

services:
  management_panel:
    build: .
    container_name: gsm3_management_panel
    image: langlangy.server.xiaozhuhouses.asia:20000/gameservermanager:3.0.3
    user: root                       
    ports:
      # GSM3管理面板端口
      - "3001:3001"                   # GSM3 Web管理界面
    volumes:
      - ./game_file:/home/.config # 通用游戏存档路径1。请务必将此宿主目录权限设置为777
      - ./game_file:/home/.local  # 通用游戏存档路径2。请务必将此宿主目录权限设置为777
      - ./game_data:/home/steam/games  # 通用游戏存档路径2。请务必将此宿主目录权限设置为777
      - gsm3_data:/root/server/data     # GSM3数据目录（使用命名卷）
    environment:
      - TZ=Asia/Shanghai              # 设置时区
      - SERVER_PORT=3001              # GSM3服务端口
    stdin_open: true                  # 保持STDIN打开
    tty: true                         # 分配TTY
    restart: unless-stopped           # 自动重启策略
    
    # 如果需要，取消注释下面的行来限制资源
    # deploy:
    #   resources:
    #     limits:
    #       cpus: '4.0'
    #       memory: 8G
    #     reservations:
    #       cpus: '2.0'
    #       memory: 4G
```

::: warning 注意
务必要按照文件中注释设置777权限，否则游戏存档将无法保存造成存档丢失！
:::

`image`为镜像名称，需要根据实际下载的镜像名称修改，末尾冒号的右边为版本号，不知道可以使用latest，如果需要进行版本更新建议使用版本号，详情可以从[Github Release](https://github.com/GSManagerXZ/GameServerManager/releases)获取最新版本号

## 创建容器
在`docker-compose.yml`文件目录下执行`docker compose up -d`将会自动根据配置文件创建容器，随后可以通过
IP加默认映射端口进行访问即可