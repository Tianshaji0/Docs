---
title: Docker部署
icon: fab fa-docker
order: 4
---

::: tip 提示
GSManager3中采用的仍然是游戏容器，拥有绝大部分的游戏运行库，所有游戏都跑在容器中，需要对Docker需要具备基础知识。建议搭配[1panel](https://1panel.cn/)面板进行使用
:::

<AutoCatalog />

## 拉取镜像

1. 在线拉取
    ```bash
    docker pull xiaozhu674/gameservermanager:latest
    ```

## 创建 docker-compose.yml
准备一个目录，在该目录下创建文件 `docker-compose.yml`

```yml
volumes:
  gsm3_data:
    driver: local
  game_data:
    driver: local
  game_file:
    driver: local

services:
  management_panel:
    build: .
    container_name: GSManager3
    image: xiaozhu674/gameservermanager:latest
    user: root                       
    ports:
      # GSM3管理面板端口
      - "3001:3001" 
      # 游戏端口，按需映射
      - "27015:27015"
    volumes:
    #steam用户数据目录 不建议修改
      - game_data:/home/.config 
      - game_data:/home/.local
      - game_file:/home/steam/games
    #root用户数据目录 不建议修改
      - game_data:/root/.config 
      - game_data:/root/.local   
      - game_file:/root/steam/games 
    #面板数据，请勿改动
      - gsm3_data:/root/server/data 
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

::: info 镜像说明
`image`为镜像名称，需要根据实际下载的镜像名称修改，末尾冒号的右边为版本号，不知道可以使用latest，如果需要进行版本更新建议使用版本号，详情可以从[Github Release](https://github.com/GSManagerXZ/GameServerManager/releases)获取最新版本号。
:::

## 创建容器
在 `docker-compose.yml` 文件目录下执行：

```bash
docker compose up -d
```

将会自动根据配置文件创建容器， subsequent to 可以通过 IP 加默认映射端口进行访问。

## 更新
1. 修改 `image: xiaozhu674/gameservermanager:latest` 中末尾的 `latest` 为最新版本号，重新在 yml 目录下执行 `docker compose up -d` 即可
2. 使用 1panel 面板，删除之前镜像，重新拉取最新镜像，然后选择**重置**容器即可

## 常见问题

::: details 无法拉取镜像
若您使用设备在中国大陆，dockerhub默认仓库受网络封锁属于正常情况，目前观察到1panel镜像源将本项目进行了缓存，实测可以以较快速度拉取，[了解详情](https://1panel.cn/docs/v2/user_manual/containers/setting/#1)
:::

::: details 存档存储在哪里？
为了提升兼容性确保文件能够准确写入到宿主机中，从 3.4.0 开始容器采用了数据卷的存储方式，这种存储方式是最稳妥且是 docker 中推荐做法，彻底告别权限带来的文件写入问题。数据卷默认在宿主机 `/var/lib/docker/volumes` 目录下以 `容器名+存储卷名` 为文件夹进行存放，GSManager 容器中的数据卷名称为：
- `gameservermanager_gsm3_data`——面板数据目录
- `gameservermanager_game_data`——通用游戏存档目录
- `gameservermanager_game_file`——游戏服务端目录
:::

::: details 旧版本如何迁移存档到数据卷？
- 将原来 `game_data` 服务端文件复制到 `/var/lib/docker/volumes/gameservermanager_game_file/_data` 目录下创建游戏文件夹将服务端文件放入进去即可，容器中面板路径保持不变。无需设置权限。
- 将原来 `game_file` 存档文件复制到 `/var/lib/docker/volumes/gameservermanager_game_data/_data` 目录下创建游戏文件夹将服务端文件放入进去即可，容器中面板路径保持不变。无需设置权限。
:::

::: details 我想改为传统路径映射方式
完全可以，但是需要注意是需要将游戏映射的宿主路径的文件夹设置为777权限，否则游戏将无法写入到宿主路径且会造成存档丢失风险
:::

::: details 无法连接到游戏服务端或不想映射端口
若您对游戏端口不太清楚，可以将容器网络模式改为host，这样容器中的游戏服务端端口就会映射到宿主机上，直接用宿主机 IP 加游戏端口即可连接。
:::