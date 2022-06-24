import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps, cert } from "firebase-admin/app";

const apps = getApps();

if (!apps.length) {
  initializeApp({
    credential: cert(
      "./acv-psicologia-firebase-adminsdk-wa6fl-4243822da5.json"
    ),
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
