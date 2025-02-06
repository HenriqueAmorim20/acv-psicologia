import { initializeApp, cert } from "firebase-admin/app";

const config = useRuntimeConfig();

const credentials = {
  projectId: config.projectId,
  privateKey: config.privateKey.replace(/\\n/gm, "\n"),
  clientEmail: config.clientEmail,
};

export const initFirestore = () => initializeApp({ credential: cert(credentials) });
