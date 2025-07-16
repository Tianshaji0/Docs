import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Docs/",

  lang: "zh-CN",
  title: "GSManager",
  description: "vuepress-theme-hope 的文档演示",

  // 设置网站图标
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
