export default defineNuxtConfig( {
  css: [ "~/assets/css/main.css" ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "nuxt-icon",
    "@formkit/nuxt",
    "@nuxt/image-edge",
    [ "@nuxtjs/i18n", {
      locales: [
        {
          code: 'en',
          file: 'en.json',
          dir: "ltr",
          iso: "en-US",
          icon: "/images/lang/en.png"
        },
        {
          code: 'fa',
          file: 'fa.json',
          dir: "rtl",
          iso: "fa-IR",
          icon: "/images/lang/ir.png"
        },
      ],
      lazy: true,
      langDir: 'lang',
      defaultLocale: 'fa',
    } ],
    "@nuxtjs/eslint-module",
    "nuxt-swiper",
    "@vueuse/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore",],
      },
    ],
  ],
  imports: {
    autoImport: true,
    dirs: ["./stores"],
  },
  app: {
    head: {
      htmlAttrs: {
        "data-theme": "light",
      },
    },
  },
} );
