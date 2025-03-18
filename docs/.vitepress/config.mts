import { defineConfig } from 'vitepress'
import lightbox from "vitepress-plugin-lightbox"

export default defineConfig({
  title: "Quazar",
  description: "Knowledge base",
  locales: {
    root: {
      label: '🇬🇧 English',
      lang: 'en',
      link: '/en',
      themeConfig: {
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
      }
    },
    ru: {
      label: '🇷🇺 Русский',
      lang: 'ru',
      themeConfig: {
        sidebar: [
          {
            text: 'Начало работы',
            items: [
              { text: '✨ Добавить подписку', link: '/ru/getting-started/add-sub' },
              { text: '🔔 Обновить подписку', link: '/ru/getting-started/update-sub' }
            ]
          },
          {
            text: 'Продвинутое',
            items: [
              { text: '🔀 Маршрутизация', link: '/ru/advanced/routing' },
              { text: '🕹️ Режимы', link: '/ru/advanced/modes' }
            ]
          },
          {
            text: 'Правила',
            items: [
              { text: '📜 Условия использования', link: '/ru/rules/terms-of-use' },
            ]
          },
        ]
      }
    },
    uk: {
      label: '🇺🇦 Український',
      lang: 'uk',
      themeConfig: {
        sidebar: [
          {
            text: 'Початок роботи',
            items: [
              { text: '✨ Додати підписку', link: '/uk/getting-started/add-sub' },
              { text: '🔔 Оновити підписку', link: '/uk/getting-started/update-sub' }
            ]
          },
          {
            text: 'Розширені',
            items: [
              { text: '🔀 Маршрутизація', link: '/uk/advanced/routing' },
              { text: '🕹️ Режими', link: '/uk/advanced/modes' }
            ]
          },
          {
            text: 'Правила',
            items: [
              { text: '📜 Умови використання', link: '/uk/rules/terms-of-use' },
            ]
          },
        ]
      }
    },
    fa: {
      label: '🇮🇷 فارسی',
      lang: 'fa',
      themeConfig: {
        sidebar: [
          {
            text: 'شروع کار',
            items: [
              { text: '✨ افزودن اشتراک', link: '/fa/getting-started/add-sub' },
              { text: '🔔 بروزرسانی اشتراک', link: '/fa/getting-started/update-sub' }
            ]
          },
          {
            text: 'پیشرفته',
            items: [
              { text: '🔀 مسیریابی', link: '/fa/advanced/routing' },
              { text: '🕹️ حالت‌ها', link: '/fa/advanced/modes' }
            ]
          },
          {
            text: 'قوانین',
            items: [
              { text: '📜 شرایط استفاده', link: '/fa/rules/terms-of-use' },
            ]
          },
        ]
      }
    }
  },
  lang: 'en-US',
  head: [
    ['link',
      { rel: 'icon', href: '/favicon.ico' }
    ]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Telegram Bot', link: 'https://t.me/quazar_accessbot' },
      { text: 'Status', link: 'https://status.quazar.icu/status/quazar' }
    ],
  },
  markdown: {
    config: (md) => {
      md.use(lightbox, {});
    },
  },
})