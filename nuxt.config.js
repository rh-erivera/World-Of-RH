
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
      { rel: 'preload', href: '/design1/01_bg_1.jpg', as: 'image'},
      { rel: 'preload', href: '/design1/01_bg_2.jpg', as: 'image'},
      { rel: 'preload', href: '/design1/01_bg_3.jpg', as: 'image'},
      { rel: 'preload', href: '/design1/01_bg_4.jpg', as: 'image'},
      { rel: 'preload', href: '/design1/01_bg_5.jpg', as: 'image'},
      { rel: 'preload', href: '/design1/01_bg_6.jpg', as: 'image'},
      { rel: 'preload', href: '/design1/01_bg_7.jpg', as: 'image'},
      { rel: 'preload', href: '/design1/01_bg_8.jpg', as: 'image'},
      { rel: 'preload', href: '/design1/01_bg_9.jpg', as: 'image'},

      { rel: 'preload', href: '/design2/02_bg_1.jpg', as: 'image'},
      { rel: 'preload', href: '/design2/02_bg_2.jpg', as: 'image'},
      { rel: 'preload', href: '/design2/02_bg_3.jpg', as: 'image'},
      { rel: 'preload', href: '/design2/02_bg_4.jpg', as: 'image'},
      { rel: 'preload', href: '/design2/02_bg_5.jpg', as: 'image'},
      { rel: 'preload', href: '/design2/02_bg_6.jpg', as: 'image'},
      { rel: 'preload', href: '/design2/02_bg_7.jpg', as: 'image'},
      { rel: 'preload', href: '/design2/02_bg_8.jpg', as: 'image'},
      { rel: 'preload', href: '/design2/02_bg_9.jpg', as: 'image'},

      { rel: 'preload', href: '/design4/04_bg_1.jpg', as: 'image'},
      { rel: 'preload', href: '/design4/04_bg_2.jpg', as: 'image'},
      { rel: 'preload', href: '/design4/04_bg_3.jpg', as: 'image'},
      { rel: 'preload', href: '/design4/04_bg_4.jpg', as: 'image'},
      { rel: 'preload', href: '/design4/04_bg_5.jpg', as: 'image'},
      { rel: 'preload', href: '/design4/04_bg_6.jpg', as: 'image'},
      { rel: 'preload', href: '/design4/04_bg_7.jpg', as: 'image'},
      { rel: 'preload', href: '/design4/04_bg_8.jpg', as: 'image'},
      { rel: 'preload', href: '/design4/04_bg_9.jpg', as: 'image'},

      { rel: 'preload', href: '/RH-Logo-Black.svg', as: 'image'},
      { rel: 'preload', href: '/RH-Logo-Grey.svg', as: 'image'},
      { rel: 'preload', href: '/RH-logo.svg', as: 'image'},
      { rel: 'preload', href: '/theWorldOfRH-Logo-White.svg', as: 'image'},
      { rel: 'preload', href: '/theWorldOfRH-Logo.svg', as: 'image'},
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
