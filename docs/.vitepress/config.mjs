import { defineConfig } from 'vitepress'

export default defineConfig({
  // base: "/harbor/",
  title: "Harbor",
  description: "Harbor Documentation",
  head: [['link', { rel: 'icon', href: '/icon/icon-light@1x.png' }]],
  themeConfig: {
    logo: '/icon/icon-light@2x.png',
    nav: [
      { text: '指南', link: '/guide/about' },
      { text: '接口', link: '/api' },
      { text: '社区', link: '/community' },
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '关于 Harbor', link: '/guide/about' },
          { text: '快速开始', link: '/guide/start' }
        ]
      },
      {
        text: '集成',
        items: [
          { text: 'OAuth2', link: '/guide/oauth2' },
          { text: '监控告警', link: '/guide/alarm' }
        ]
      }
    ],
    outline:{
      level: [2,6]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/skye-z/harbor' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Skye Zhang'
    }
  },
  search: {
    provider: 'local'
  }
})
