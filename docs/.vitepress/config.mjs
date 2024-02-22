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
          { text: '快速开始', link: '/guide/start' },
          { text: '兼容性', link: '/guide/compatible' },
          { text: '初始化', link: '/guide/reinit' },
          { text: '最小化', link: '/guide/min' }
        ]
      },
      {
        text: '功能',
        items: [
          { text: '控制台', link: '/function/console' },
          { text: '容器管理', link: '/function/container' },
          { text: '镜像管理', link: '/function/image' },
          { text: '网络管理', link: '/function/network' },
          { text: '存储管理', link: '/function/volume' },
          { text: '日志', link: '/function/logs' },
          { text: '用户', link: '/function/user' }
        ]
      },
      {
        text: '集成',
        items: [
          { text: 'OAuth2', link: '/integration/oauth2' },
          { text: '监控告警', link: '/integration/alarm' }
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
    },
    search: {
      provider: 'local'
    },
  },
  markdown: {
    image: {
      lazyLoading: true
    }
  }
})
