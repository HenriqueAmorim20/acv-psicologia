import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, uploadString, getDownloadURL, getMetadata } from "firebase/storage";

export const signInUser = async (email: string, password: string) => {
  const { $auth } = useNuxtApp();

  const credentials = await signInWithEmailAndPassword($auth, email, password).catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  return credentials;
};

export const signOutUser = async () => {
  const { $auth } = useNuxtApp();

  const result = await $auth.signOut().catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  return result;
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
  const { $storage } = useNuxtApp();

  const storageRef = ref($storage, fullPath);
  const snapshot = await uploadString(storageRef, file, "data_url");
  if (snapshot) {
    const downloadUrl = await getDownloadURL(snapshot.ref);
    const metadata = await getMetadata(storageRef);
    return { snapshot, downloadUrl, metadata };
  }
};
