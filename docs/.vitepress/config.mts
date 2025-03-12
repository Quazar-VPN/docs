import { defineConfig } from 'vitepress'
import lightbox from "vitepress-plugin-lightbox"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Quazar",
  description: "Knowledge base",
  locales: {
    root: {
      label: '🇬🇧 English',
      lang: 'en',
      link: '/en'
    },
    ru: {
      label: '🇷🇺 Русский',
      lang: 'ru',
    },
    uk: {
      label: '🇺🇦 Український',
      lang: 'uk',
    },
    fa: {
      label: '🇮🇷 فارسی',
      lang: 'fa',
    }
  },
  lang: 'en-US',
  head: [
    ['link',
      { rel: 'icon', href: '/favicon.ico' }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Telegram Bot', link: 'https://t.me/quazar_accessbot' },
      { text: 'Status', link: 'https://status.quazar.icu/status/quazar' }
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: '✨ Add subscription', link: '/en/getting-started/add-sub' },
          { text: '🔔 Update subscription', link: '/en/getting-started/update-sub' }
        ]
      },
      {
        text: 'Advanced',
        items: [
          { text: '🔀 Routing', link: '/en/advanced/routing' },
          { text: '🕹️ Modes', link: '/en/advanced/modes' }
        ]
      },
      {
        text: 'Rules',
        items: [
          { text: '📜 Terms of use', link: '/en/rules/terms-of-use' },
        ]
      },
    ]
  },
  markdown: {
    config: (md) => {
      // Use lightbox plugin
      md.use(lightbox, {});
    },
  },
})
