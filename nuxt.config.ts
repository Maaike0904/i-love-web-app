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
    },
    // modules: ["@nuxtjs/apollo"],
    // apollo: {
    //   clientConfigs: {
    //     default: {
    //       httpEndpoint:
    //         process.env.BACKEND_URL || "http://localhost:3000/graphql",
    //     },
    //   },
    // },
  },
});
