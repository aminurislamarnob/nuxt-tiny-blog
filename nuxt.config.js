export default {
  
  //loading progress bar
  loading: {
    color: '#48bb78',
    height: '5px',
    duration: 1000,
    rtl: true,
    continuous: true
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Simple Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css' },

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios',
    '@/plugins/mixins/validationErrors',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  //axios base url
  axios: {
    baseURL: 'http://localhost:8000/api', // Used as fallback if no runtime config is provided
  },

  //Local Auth
  auth: {
    strategies: {
      local: {
        token: {
          property: 'meta.token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'data',
          autoFetch: true
        },
        endpoints: {
          login: { url: 'login', method: 'post' },
          logout: { url: 'logout', method: 'post' },
          user: { url: 'user', method: 'get' }
        }
      }
    },
    // redirect: {
    //   login: '/login',
    //   logout: '/',
    //   callback: '/login',
    //   home: '/dashboard'
    // }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  //google font
  googleFonts: {
    families: {
      Barlow: [300, 500, 600, 700 ],
      'DM+Sans': [400, 500, 700 ],
    }
  },

  //middleware
  router: {
    middleware: ['auth', 'clearValidationErrors']
  }
}
