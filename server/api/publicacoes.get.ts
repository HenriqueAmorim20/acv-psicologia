import { getFirestore } from "firebase-admin/firestore";
import { getApps } from "firebase-admin/app";
import { initFirestore } from "~~/server/initFirestore";

const apps = getApps();

if (!apps.length) initFirestore();

export default async () => {
  const db = getFirestore();
  const publicacoes = await db.collection("publicacoes").get();
  const publicacoesData = publicacoes.docs.map(doc => {
    return {
      uuid: doc.id,
      ...doc.data(),
    };
  });
  return publicacoesData;
};
