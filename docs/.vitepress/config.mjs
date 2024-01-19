import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "harbor",
  title: "Harbor",
  description: "Harbor Documentation",
  head: [['link', { rel: 'icon', href: '/image/icon/icon-light@1x.png' }]],
  themeConfig: {
    logo: '/image/icon/icon-light@2x.png',
    nav: [
      { text: '指南', link: '/guide/about' },
      { text: '集成', link: '/integrate' },
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
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Skye Zhang'
    }
  }
})
