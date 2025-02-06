import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    projectId: config.public.projectId,
    storageBucket: config.public.storageBucket,
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const storage = getStorage(firebaseApp);

  const auth = getAuth(firebaseApp);
  const firebaseUser = useFirebaseUser();
  firebaseUser.value = auth.currentUser;
  onAuthStateChanged(auth, user => {
    firebaseUser.value = user;
  });

  nuxtApp.provide("auth", auth);
  nuxtApp.provide("storage", storage);
});
