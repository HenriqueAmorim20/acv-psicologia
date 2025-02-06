import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
  getMetadata,
  type FirebaseStorage,
} from "firebase/storage";
import { initializeApp } from "firebase/app";

let storage: FirebaseStorage;

export const initFirebase = (firebaseConfig: Record<string, unknown>) => {
  const firebaseApp = initializeApp(firebaseConfig);
  storage = getStorage(firebaseApp);
};

export const signInUser = async (email: string, password: string) => {
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(auth, email, password).catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  return credentials;
};

export const signOutUser = async () => {
  const auth = getAuth();
  const result = await auth.signOut().catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  return result;
};

export const initUser = async () => {
  const auth = getAuth();
  const firebaseUser = useFirebaseUser();

  firebaseUser.value = auth.currentUser;

  onAuthStateChanged(auth, user => {
    firebaseUser.value = user;
  });
};

export const uploadFile = async (file: Blob) => {
  return await new Promise(function (resolve, reject) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async e => {
      resolve({ result: reader.result, file: file });
    };
  });
};

export const saveFile = async (fullPath: string, file: string) => {
  const storageRef = ref(storage, fullPath);
  const snapshot = await uploadString(storageRef, file, "data_url");
  if (snapshot) {
    const downloadUrl = await getDownloadURL(snapshot.ref);
    const metadata = await getMetadata(storageRef);
    return { snapshot, downloadUrl, metadata };
  }
};
