import { initializeApp, cert } from "firebase-admin/app";

const config = useRuntimeConfig();

const credentials = {
  projectId: config.PROJECT_ID,
  privateKey: config.PRIVATE_KEY.replace(/\\n/g, "\n"),
  clientEmail: config.CLIENT_EMAIL,
};

export const initFirestore = () => initializeApp({ credential: cert(credentials) });
