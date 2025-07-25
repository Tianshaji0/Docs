---
title: Steam游戏部署
order: 2
---

::: info
本页介绍如何在 GSManager3 中配置和部署 Steam 游戏，包含 installgame.json 配置说明及注意事项。
:::


## 配置文件位置

- 路径：`server/data/games/installgame.json`

## 配置示例

```json
{
    "Palworld": {
    "game_nameCN": "幻兽帕鲁",
    "appid": "2394010",
    "tip": "游戏端口：8211 UDP，配置文件位置：游戏根目录，存档位置：Pal/Saved/SaveGames，",
    "image":"https://shared.cdn.queniuqe.com/store_item_assets/steam/apps/1623730/44e7cf48b38e3ace008e9f49c316f8cd949f7918/header_schinese.jpg",
    "url":"https://store.steampowered.com/app/1623730/Palworld/",
    "system":["Windows","Linux"],
    "system_info":["Windows","Linux"],
    "docs":"http://docsgsm.xiaozhuhouses.asia/%E6%B8%B8%E6%88%8F%E7%99%BE%E7%A7%91/Steam/%E6%9D%80%E6%88%AE%E7%A9%BA%E9%97%B42.html"
    }
}
```

::: details 字段说明
- `Palworld`：游戏英文名（唯一标识）
- `game_nameCN`：游戏中文名（显示）
- `appid`：Steam appid
- `tip`：游戏提示（显示）
- `image`：游戏图片直链（显示）
- `url`：Steam 商城链接（显示）
- `system`：兼容的平台（不包含的说明不兼容）
- `system_info`：兼容面板的平台（不包含的说明不兼容）
- `docs`：游戏文档链接（显示）
:::

## 注意事项

::: warning url
图片链接需使用 steam 国内 CDN：`https://shared.cdn.queniuqe.com/`，可在 steam 商城页面右键封面图复制路径。
:::

::: tip system_info
以输出流是否能够正常捕捉为主。
一般 Windows 要注意，由于输出流问题，如果在开启转发输出流的情况下仍然不能捕捉输出流视为不兼容。
:::