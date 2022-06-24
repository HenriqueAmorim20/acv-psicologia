import { getFirestore } from "firebase-admin/firestore";
import { getApps } from "firebase-admin/app";
import { initFirestore } from "~~/server/initFirestore";

const apps = getApps();

if (!apps.length) initFirestore();

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
