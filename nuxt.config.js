const title = "小易貼圖使用條款"
const description = "這裡詳細記載了豐富的小易貼圖，以及其使用條款。"
const url = "https://sticker.steveyi.net/"
const img = "https://sticker.steveyi.net/social.jpg"
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title,
    htmlAttrs: {
      lang: 'zh-TW'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: title },
      { hid: 'description', name: 'description', content: description },
      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: img },
      // Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: url },
      { property: 'twitter:title', content: title },
      { property: 'twitter:description', content: description },
      { property: 'twitter:image', content: img },
    ],
    link: [
      { rel: 'icon', href: 'https://sticker.steveyi.net/cute.png' },
      { rel: 'stylesheet', href: 'https://gnehs.github.io/ChatUI/css/ChatUI.css' },
      // Google fonts
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-vite',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
