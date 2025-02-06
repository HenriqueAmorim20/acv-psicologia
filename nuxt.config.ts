// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Ana Carolina Villaça",
      htmlAttrs: {
        lang: "pt-br",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
      script: [{ src: "https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js" }],
    },
  },

  css: ["~/assets/css/global.css"],
  runtimeConfig: {
    firabaseApiKey: process.env.FIREBASE_API_KEY,
    projectId: process.env.PROJECT_ID,
    privateKey: process.env.PRIVATE_KEY,
    clientEmail: process.env.CLIENT_EMAIL,
    storageBucket: process.env.STORAGE_BUCKET,
    public: {
      firabaseApiKey: process.env.FIREBASE_API_KEY,
      projectId: process.env.PROJECT_ID,
      privateKey: process.env.PRIVATE_KEY,
      clientEmail: process.env.CLIENT_EMAIL,
      storageBucket: process.env.STORAGE_BUCKET,
    },
  },
  compatibilityDate: "2025-02-05",
});
