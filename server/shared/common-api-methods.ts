import { H3Event, type EventHandlerRequest } from "h3";
import db from "~/server/firestore-api-config";

export const commonGet = async (collectionName: string) => {
  const snapshot = await db.collection(collectionName).get();
  return snapshot.docs.map(doc => ({ uuid: doc.id, ...doc.data() }));
};

export const commonPost = async (event: H3Event<EventHandlerRequest>, collectionName: string) => {
  const body = await readBody(event);
  return db.collection(collectionName).add(body);
};

export const commonPatch = async (event: H3Event<EventHandlerRequest>, collectionName: string) => {
  const body = await readBody(event);
  return db.collection(collectionName).doc(body.id).set(body.publicacao);
};

export const commonDelete = async (event: H3Event<EventHandlerRequest>, collectionName: string) => {
  const body = await readBody(event);
  return db.collection(collectionName).doc(body.id).delete();
};
