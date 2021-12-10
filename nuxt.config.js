const config = require('./.contentful.json');

export default {
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
  },
  components: true,
  css: [
    'bulma',
    '~/assets/css/main.scss'
  ],
  head: {
    title: 'Chris LaRocque | Web Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Chris LaRocque is a web developer from Boston, MA. He specializes in tactical agile development aimed at delivering user-centric software at scale and at speed.'
      }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: "180x180", href: '/apple-touch-icon.png' },
      { rel: 'icon', type: "image/png", sizes: "32x32", href: '/favicon-32x32.png' },
      { rel: 'icon', type: "image/png", sizes: "16x16", href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ]
  },
  modules: [
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    runtime: true // Support `$md()`
  },
  target: 'static',
  ssr: false,
  generate: {
    fallback: true
  }
}