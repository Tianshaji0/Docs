import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "GSManager",
  description: "vuepress-theme-hope 的文档演示",

  // 设置网站图标
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
  ],

  theme,

  // 客户端配置文件
  clientConfigFile: path.resolve(__dirname, "./client.ts"),

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
