import { initFirebase } from "~~/composables/useFirebase";

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
    projectId: config.PROJECT_ID,
    storageBucket: config.STORAGE_BUCKET,
  };

  initFirebase(firebaseConfig);
  initUser();
});
