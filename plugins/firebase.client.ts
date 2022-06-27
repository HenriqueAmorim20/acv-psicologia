import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
    projectId: config.PROJECT_ID,
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  initUser();
});
