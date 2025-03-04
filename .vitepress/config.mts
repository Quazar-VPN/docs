import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Quazar",
  description: "Knowledge base",
  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/docs/en/",
    },
    ru: {
      label: "Русский",
      lang: "ru",
      link: "/docs/ru",
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/images/logo.png",

    nav: [
      { text: "Telegram Bot", link: "https://t.me/quazar_accessbot" },
      { text: "Status", link: "https://status.quazar.icu/status/quazar" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "telegram", link: "https://t.me/quazar_accessbot" },
      { icon: "status", link: "https://t.me/quazar_accessbot" },
    ],
  },
});
