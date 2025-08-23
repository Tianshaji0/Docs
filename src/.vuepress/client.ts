import { defineClientConfig } from "vuepress/client";
import AIAssistant from "./components/AIAssistant.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    // 全局注册AI助手组件
    app.component("AIAssistant", AIAssistant);
  },
  setup() {},
  layouts: {},
  rootComponents: [
    // 将AI助手作为根组件添加，这样它会在所有页面显示
    AIAssistant,
  ],
});
