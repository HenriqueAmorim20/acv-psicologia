import { cert, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const config = useRuntimeConfig();

const firebaseConfig = {
  projectId: config.projectId,
  privateKey: config.privateKey.replace(/\\n/gm, "\n"),
  clientEmail: config.clientEmail,
};

const app = initializeApp({ credential: cert(firebaseConfig) });
const db = getFirestore(app);

export default db;
