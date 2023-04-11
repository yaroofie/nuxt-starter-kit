import en from "./locales/en.json";
import fa from "./locales/fa.json";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig( {
  css: [ '~/assets/css/main.css' ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-icon',
    '@formkit/nuxt',
    '@nuxt/image-edge',
    '@nuxtjs/i18n',
    '@nuxtjs/eslint-module',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          [ 'defineStore', 'definePiniaStore' ], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      }
    ]
  ],
  plugins: [
    { src: '~/plugins/locomotive', mode: 'client' },
  ],
  i18n: {
    defaultLocale: 'fa',
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
      {
        code: 'fa',
        iso: 'fa-IR'
      }
    ],
    /* module options */
    vueI18n: {
      legacy: false,
      locale: 'en',
      messages: {
        en,
        fa,
      }
    }
  },
  imports: {
    autoImport: true,
    dirs: [ "./stores" ]
  },
  app: {
    head: {
      htmlAttrs: {
        "data-theme": "light"
      }
    }
  }
} );
