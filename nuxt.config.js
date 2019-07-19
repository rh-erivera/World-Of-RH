
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', href: '/bg-1.jpg', as: 'image'},
      { rel: 'preload', href: '/bg-2.jpg', as: 'image'},
      { rel: 'preload', href: '/bg-3.jpg', as: 'image'},
      { rel: 'preload', href: '/bg-4.jpg', as: 'image'},
      { rel: 'preload', href: '/bg-5.jpg', as: 'image'},
      { rel: 'preload', href: '/bg-6.jpg', as: 'image'},
      { rel: 'preload', href: '/bg-7.jpg', as: 'image'},
      { rel: 'preload', href: '/bg-8.jpg', as: 'image'},
      { rel: 'preload', href: '/bg-9.jpg', as: 'image'},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
