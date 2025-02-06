import { initFirebase } from "~~/composables/useFirebase";

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.public.firabaseApiKey,
    projectId: config.public.projectId,
    storageBucket: config.public.storageBucket,
  };

  initFirebase(firebaseConfig);
  initUser();
});
