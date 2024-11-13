import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
//import { cut } from "nodejs-jieba";
//import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/gushi/",

  locales: {
    /* "/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
    */
    "/": {
      lang: "zh-CN",
      title: "息壤",
      description: "大A知识收集整理",
    },
  },

  theme,

/*
  plugins: [
    searchProPlugin({
      // 索引全部内容
      //indexContent: true,
      indexOptions: {
        // 使用 nodejs-jieba 进行分词
        tokenize: (text, fieldName) =>
          fieldName === "id" ? [text] : cut(text, true),
      },
      
      // 为分类和标签添加索引
      customFields: [
        {
          name: "Category",
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          name: "Tag",
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
        {
          name: "author",
          getter: (page) => page.frontmatter.author,
          formatter: "作者：$content",
        },
      ],
    }),
  ],
*/

  // Enable it with pwa
  // shouldPrefetch: false,
});
