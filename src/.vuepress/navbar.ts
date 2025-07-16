import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "部署",
    icon: "fa-download",
    prefix: "/部署/",
    children: ["Windows","Linux","Docker"]
  },
  {
    text: "功能详解",
    icon: "fa-book",
    link: "/功能详解/",
  },
  {
    text: "使用技巧",
    icon: "fa-lightbulb",
    link: "/使用技巧/",
  },
]);
