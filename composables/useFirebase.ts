import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const signInUser = async (email: string, password: string) => {
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch(error => {
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
