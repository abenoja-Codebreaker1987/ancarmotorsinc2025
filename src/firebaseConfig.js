import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfu5GY6ceAZQylEjTWTL3TNfnnc70ByRY",
  authDomain: "ancar-motors-ad4f3.firebaseapp.com",
  projectId: "ancar-motors-ad4f3",
  storageBucket: "ancar-motors-ad4f3.firebasestorage.app",
  messagingSenderId: "574727313920",
  appId: "1:574727313920:web:78839ba76f2e92c61e56e5",
   measurementId: "G-JS6S78FD65"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);