import {defineConfig} from 'vitepress'

import lightbox from "vitepress-plugin-lightbox"

export default defineConfig({
    title: "Quazar", description: "Knowledge base", locales: {
        root: {
            label: '🇬🇧 English', lang: 'en', link: '/en', themeConfig: {
                nav: [{text: 'Telegram Bot', link: 'https://t.me/quazar_accessbot'}, {
                    text: 'Status', link: 'https://status.quazar.icu/status/quazar'
                }], sidebar: [{
                    text: 'Getting started', items: [{
                        text: '✨ Add subscription', link: '/en/getting-started/add-sub'
                    }, {text: '🔔 Update subscription', link: '/en/getting-started/update-sub'}]
                }, {
                    text: 'Advanced', items: [{text: '🔀 Routing', link: '/en/advanced/routing'}, {
                        text: '🕹️ Modes', link: '/en/advanced/modes'
                    }]
                }, {
                    text: 'Rules', items: [{text: '📜 Terms of use', link: '/en/rules/terms-of-use'},]
                },]
            }
        }, ru: {
            label: '🇷🇺 Русский', lang: 'ru', themeConfig: {
                nav: [{text: 'Телеграм Бот', link: 'https://t.me/quazar_accessbot'}, {
                    text: 'Статус', link: 'https://status.quazar.icu/status/quazar'
                }], sidebar: [{
                    text: 'Начало работы', items: [{
                        text: '✨ Добавить подписку', link: '/ru/getting-started/add-sub'
                    }, {text: '🔔 Обновить подписку', link: '/ru/getting-started/update-sub'}]
                }, {
                    text: 'Продвинутое', items: [{text: '🔀 Маршрутизация', link: '/ru/advanced/routing'}, {
                        text: '🕹️ Режимы', link: '/ru/advanced/modes'
                    }]
                }, {
                    text: 'Правила', items: [{text: '📜 Условия использования', link: '/ru/rules/terms-of-use'},]
                },]
            }
        },
    }, lang: 'en-US', head: [['link', {rel: 'icon', href: '/favicon.ico'}]], themeConfig: {
        logo: '/logo.png',
    }, markdown: {
        config: (md) => {
            md.use(lightbox, {});
        },
    },
})