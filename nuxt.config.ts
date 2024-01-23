// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      datoCmsToken: process.env.DATO_CMS_TOKEN,
    },
  },
  app: {
    head: {
      title: "I love web Maaike Verplancke",
      pageTransition: { name: "page", mode: "out-in" },
    },
  },
});
