---
layout: home

hero:
  name: "Harbor"
  text: "轻量级 本地化<br/>Docker 管理平台"
  tagline: 体积小、开销低、功能强大, 为运维提供强有力的帮助
  image:
    src: /assets/icon/icon-dark@4x.png
    alt: VitePress
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/start
    - theme: alt
      text: Github
      link: https://github.com/skye-z/harbor

features:
  - icon: 🔍
    title: 体积小
    details: 应用程序体积不到 30MB, 便于部署到存储空间受限的环境
  - icon: 🚀
    title: 部署快
    details: 在网络条件好的情况下使用一键脚本可在30秒内完成安装
  - icon: ⚡️
    title: 开销低
    details: 在本地管理常见场景中开销仅 3 ~ 8% 的 CPU 和不到 25MB 的内存
  - icon: 📦
    title: 零依赖
    details: 不依赖外部组件运行, 降低了受部署环境影响的可能性
---

<style>
  :root {
    --vp-button-brand-bg: #08BDC9;
    --vp-button-brand-hover-bg: #25D8E4;

    --vp-home-hero-name-color: transparent;
    --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #08BDC9 70%);

    --vp-home-hero-image-filter: blur(68px);
    --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 30%, #08BDC9 70%);
  }

  .VPHome{
    padding-bottom: 30px !important;
  }
</style>
