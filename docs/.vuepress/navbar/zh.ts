import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",  
  { text: "大A知识", icon: "book", link: "/gushi/" },

  /*
  {
    text: "指南",
    icon: "creative",
    prefix: "/zh/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  */
  {
    text: "赞助",
    icon: "circle-dollar-to-slot",
    link: "/donate",
  },
]);
