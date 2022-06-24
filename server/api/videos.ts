import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps, cert } from "firebase-admin/app";

const apps = getApps();
const config = useRuntimeConfig();

const credentials = {
  projectId: config.PROJECT_ID,
  privateKey: config.PRIVATE_KEY.replace(/\\n/g, "\n"),
  clientEmail: config.CLIENT_EMAIL,
};

if (!apps.length) {
  initializeApp({
    credential: cert(credentials),
  });
}

export default async (request, response) => {
  const db = getFirestore();
  const videos = await db.collection("videos").get();
  const videosData = videos.docs.map(doc => {
    return {
      uuid: doc.id,
      ...doc.data(),
    };
  });
  return videosData;
};
