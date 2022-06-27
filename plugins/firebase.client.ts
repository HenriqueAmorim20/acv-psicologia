import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
    projectId: config.PROJECT_ID,
    storageBucket: config.STORAGE_BUCKET,
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  initUser();
});
