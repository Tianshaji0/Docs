---
title: 异星工厂Windows开服教程
icon: gamepad
order: 2
category:
  - 游戏指南
tag:
  - 异星工厂
  - 服务器搭建
author: Tianshaji
---

# 异星工厂开服教程

::: tip 请好好阅读并遵循
请仔细阅读本文档并按照说明操作
请严格按照教程进行，否则不一定能启动服务器
:::
## 下载服务器端

服务器即是游戏本体

## 游戏存档
存档位置：C:\Users\你的用户名\AppData\Roaming\Factorio

saves：存档文件夹 请先打开游戏保存生成一个存档，存档命名为 Factorio
 mods：模组文件夹 请把所有模组放在此文件夹

建议：
1.先把要用的模组先下载好
2.把要用的模组启用
3.把你需要的难度设置调整好
4.把地图挑选好
5.进游戏后保存
6.把存档命名为 Factorio
PS:如果想继续玩之前的存档请把存档命名为 Factorio

！！！！注意！！！！
在服务器部署的情况下请把以上的做好
把整个C:\Users\你的用户名\AppData\Roaming\Factorio
放在服务器的相同位置

## 配置服务器文件
文件位置：游戏本体\data\server-settings.json
代码注释
{
  <!--服务器名称（显示在服务器列表）-->
  "name": "Factorio",
  
  <!--服务器描述（显示在服务器列表的详情中）-->
  "description": "Description of the game that will appear in the listing",
  
  <!--服务器标签（用于分类和搜索）-->
  "tags": [ "game", "tags" ],

  <!--最大玩家数量（0=无限制，管理员可无视限制加入）-->
  "_comment_max_players": "Maximum number of players allowed, admins can join even a full server. 0 means unlimited.",
  "max_players": 0,

  <!--服务器可见性设置-->
  "_comment_visibility": [
    "public: Game will be published on the official Factorio matching server",
    "lan: Game will be broadcast on LAN"
  ],
  "visibility": {
    "public": true,    <!--是否公开到官方服务器列表-->
    "lan": true        <!--是否在局域网内可见-->
  },

  <!--Factorio.com 账户凭证（公开服务器必填）-->
  "_comment_credentials": "Your factorio.com login credentials. Required for games with visibility public",
  "username": "",      <!--Factorio 官网账号-->
  "password": "",      <!--Factorio 官网密码-->

  <!--替代密码的验证令牌-->
  "_comment_token": "Authentication token. May be used instead of 'password' above.",
  "token": "",

  <!--加入游戏所需的密码（玩家连接时输入）-->
  "_comment_game_password": "Password required for players to join the server",
  "game_password": "",

  <!--是否强制验证玩家 Factorio 账户-->
  "_comment_require_user_verification": "When set to true, the server will only allow clients that have a valid Factorio.com account",
  "require_user_verification": true,

  <!--单个客户端最大上传速度（KB/s，0=无限制）-->
  "_comment_max_upload_in_kilobytes_per_second": "optional, default value is 0. 0 means unlimited.",
  "max_upload_in_kilobytes_per_second": 0,

  <!--同时上传槽位数量（0=无限制）-->
  "_comment_max_upload_slots": "optional, default value is 5. 0 means unlimited.",
  "max_upload_slots": 5,

  <!--最小网络延迟（单位：tick，0=无延迟）-->
  "_comment_minimum_latency_in_ticks": "optional one tick is 16ms in default speed, default value is 0. 0 means no minimum.",
  "minimum_latency_in_ticks": 0,

  <!--网络更新频率（6-240，值越高网络负载越大）-->
  "_comment_max_heartbeats_per_second": "Network tick rate. Maximum rate game updates packets are sent at before bundling them together. Minimum value is 6, maximum value is 240.",
  "max_heartbeats_per_second": 60,

  <!--是否允许老玩家突破人数限制-->
  "_comment_ignore_player_limit_for_returning_players": "Players that played on this map already can join even when the max player limit was reached.",
  "ignore_player_limit_for_returning_players": false,

  <!--游戏内命令权限（true/ false / admins-only）-->
  "_comment_allow_commands": "possible values are, true, false and admins-only",
  "allow_commands": "admins-only",

  <!--自动保存间隔（分钟）-->
  "_comment_autosave_interval": "Autosave interval in minutes",
  "autosave_interval": 10,

  <!--自动保存槽位数量（循环覆盖）-->
  "_comment_autosave_slots": "server autosave slots, it is cycled through when the server autosaves.",
  "autosave_slots": 5,

  <!--挂机自动踢出时间（分钟，0=禁用）-->
  "_comment_afk_autokick_interval": "How many minutes until someone is kicked when doing nothing, 0 for never.",
  "afk_autokick_interval": 0,

  <!--无玩家时自动暂停-->
  "_comment_auto_pause": "Whether should the server be paused when no players are present.",
  "auto_pause": true,

  <!--新玩家加入时暂停游戏-->
  "_comment_auto_pause_when_players_connect": "Whether should the server be paused when someone is connecting to the server.",
  "auto_pause_when_players_connect": false,

  <!--仅管理员可暂停游戏 -->
  "_comment_only_admins_can_pause_the_game": "Restricts pausing functionality to administrators only",
  "only_admins_can_pause_the_game": true,

  <!--仅服务器保存存档（不占用玩家带宽） -->
  "_comment_autosave_only_on_server": "Whether autosaves should be saved only on server or also on all connected clients. Default is true.",
  "autosave_only_on_server": true,

  <!--非阻塞存档（实验性功能，UNIX系统专用）-->
  "_comment_non_blocking_saving": "Highly experimental feature, enable only at your own risk of losing your saves. On UNIX systems, server will fork itself to create an autosave. Autosaving on connected Windows clients will be disabled regardless of autosave_only_on_server option.",
  "non_blocking_saving": false,

  <!--网络数据包分段设置（高级网络优化）-->
  "_comment_segment_sizes": "Long network messages are split into segments that are sent over multiple ticks. Their size depends on the number of peers currently connected. Increasing the segment size will increase upload bandwidth requirement for the server and download bandwidth requirement for clients. This setting only affects server outbound messages. Changing these settings can have a negative impact on connection stability for some clients.",
  "minimum_segment_size": 25,                  <!-- 低负载时最小分段大小 -->
  "minimum_segment_size_peer_count": 20,       <!-- 触发最小分段的玩家数量 -->
  "maximum_segment_size": 100,                 <!-- 高负载时最大分段大小 -->
  "maximum_segment_size_peer_count": 10        <!-- 触发最大分段的玩家数量 -->
}

## 启动服务器

在游戏目录下创建一个批处理文件Factorio.bat
打开编辑

start 
  /wait .\bin\x64\factorio.exe --start-server Factorio.zip --server-settings .\data\server-settings.json --port 34197
pause

代码注释
  \bin\x64\factorio.exe                               <!-- 相对路径，不要随便动 -->
  --start-server Factorio.zip                         <!-- 启动Factorio.zip存档 -->
  --server-settings .\data\server-settings.json       <!-- 启用settings.json服务器配置文件 -->
  --port 34197                                         <!-- 游戏端口 -->

PS：更多启动参数请到Factorio官方网站查询

PS：控制台有显示"公网:端口"的字样说明启动完整

## 端口放开

--port 34197 是多少就放开多少 此代码34197就放开34197 TCP+UDP

## 连接服务器

打开游戏
多人游戏
直接连接
填写：公网IP：端口

互联网列表公开服务器需要购买正版后 Factorio 官网账号密码，在服务器配置文件填写

## 以下请建立在服务器能正常启动游戏能正常连接游玩的情况下进行
## 面板启动

1.登陆GSManager
2.点击实例管理
3.创建实例
实例名称：Factorio
工作目录：游戏本体路径
启动命令:.\Factorio.bat