// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMvR5PHvZjUDWZhTV6HhjdZmBubNsu1ls",
  authDomain: "netflix-clone-8eb21.firebaseapp.com",
  projectId: "netflix-clone-8eb21",
  storageBucket: "netflix-clone-8eb21.appspot.com",
  messagingSenderId: "274027028760",
  appId: "1:274027028760:web:a19653a3dc03efc402fe6d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
