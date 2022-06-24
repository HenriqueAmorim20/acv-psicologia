import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
    projectId: "acv-psicologia",
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  initUser();
});
