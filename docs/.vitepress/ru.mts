import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Квазар",
  description: "База знаний",
  locales: {
    root: {
      label: '🇬🇧 English',
      lang: 'en',
      link: '/en'
    },
    fr: {
      label: '🇷🇺 Русский',
      lang: 'ru',
      link: '/ru'
    }
  },
  lang: 'ru-RU',
  head: [
    ['link',
      { rel: 'icon', href: '/images/favicon.ico' }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Телеграм бот', link: 'https://t.me/quazar_accessbot' },
      { text: 'Статус', link: 'https://status.quazar.icu/status/quazar' }
    ],

    sidebar: [
      {
        text: 'База',
        items: [
          { text: '✨ Добавление подписки', link: '/ru/getting-started/add-sub' },
          { text: '🔔 Обновление подписки', link: '/ru/getting-started/update-sub' }
        ]
      },
      {
        text: 'Продвинутым',
        items: [
          { text: '🔀 Роутинг', link: '/ru/advanced/routing' },
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
})
