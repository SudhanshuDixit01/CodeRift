import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB-X2UaF_kxuqavk4Fx2VAsZgyQ2zgUY_w",
  authDomain: "coderift-a3305.firebaseapp.com",
  projectId: "coderift-a3305",
  storageBucket: "coderift-a3305.appspot.com",
  messagingSenderId: "144198738955",
  appId: "1:144198738955:web:cc22284f73dafc194c530e",
  measurementId: "G-QMXRDN52M0"
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
// export default db;
