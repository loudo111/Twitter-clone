// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbiZCcuOgTXfH7Py_-c2-t3PzHaw8BVW0",
  authDomain: "twitter-clone-6ab71.firebaseapp.com",
  projectId: "twitter-clone-6ab71",
  storageBucket: "twitter-clone-6ab71.appspot.com",
  messagingSenderId: "980176776998",
  appId: "1:980176776998:web:1995a35aab08b5c1f19be7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };