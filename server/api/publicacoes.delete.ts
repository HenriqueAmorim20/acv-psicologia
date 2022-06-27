import { getFirestore } from "firebase-admin/firestore";
import { getApps } from "firebase-admin/app";
import { initFirestore } from "~~/server/initFirestore";

const apps = getApps();

if (!apps.length) initFirestore();

export default async request => {
  const db = getFirestore();
  const body = await useBody(request);
  const result = await db.collection("publicacoes").doc(body.id).delete();
  return result;
};
