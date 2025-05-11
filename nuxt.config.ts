import { defineOrganization } from 'nuxt-schema-org/schema';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'swiper/swiper-bundle.css',
    '@/assets/css/fonts.css',
    '@/assets/css/main.css',
  ],

  vite: {
    define: {
      'process.env': {},
    },
    plugins: [svgLoader({})],
  },

  app: {
    head: {
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '57x57',
          href: '/images/favicons/apple-icon-57x57.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '60x60',
          href: '/images/favicons/apple-icon-60x60.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '72x72',
          href: '/images/favicons/apple-icon-72x72.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '76x76',
          href: '/images/favicons/apple-icon-76x76.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '114x114',
          href: '/images/favicons/apple-icon-114x114.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '120x120',
          href: '/images/favicons/apple-icon-120x120.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '144x144',
          href: '/images/favicons/apple-icon-144x144.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '152x152',
          href: '/images/favicons/apple-icon-152x152.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/images/favicons/apple-icon-180x180.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/images/favicons/android-icon-192x192.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/images/favicons/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: '/images/favicons/favicon-96x96.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/images/favicons/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/images/favicons/manifest.json' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript',
        },
      ],
    },
  },

  site: {
    name: 'Khattmah Academy',
    description:
      'Join Khatmah, the leading online platform for Quranic education. Learn Tajweed, Hifz, and Arabic from expert instructors. Start your spiritual journey today.',
    url: 'https://khattmahacademy.com',
    image: '/images/og-image.png',
    defaultLocale: 'en',
  },

  schemaOrg: {
    identity: defineOrganization({
      name: 'Khattmah Academy',
      logo: '/images/Logo-Khatmah.png',
    }),
  },

  modules: ['@nuxt/image', '@nuxtjs/seo'],

  nitro: {
    preset: 'vercel',
  },
});
