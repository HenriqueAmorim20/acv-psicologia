import { getFirestore } from "firebase-admin/firestore";
import { getApps } from "firebase-admin/app";
import { initFirestore } from "~~/server/initFirestore";

const apps = getApps();

if (!apps.length) initFirestore();

export default async (request, response) => {
  const db = getFirestore();
  const body = await useBody(request);
  const video = await db.collection("videos").doc(body.id).set({
    url: body.url,
  });
  return video;
};
