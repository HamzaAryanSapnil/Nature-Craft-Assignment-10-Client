// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzMW5a2GJqt9EXkjnlCs2Efh2y9DOIcFI",
  authDomain: "assignment-10-art-and-craft.firebaseapp.com",
  projectId: "assignment-10-art-and-craft",
  storageBucket: "assignment-10-art-and-craft.appspot.com",
  messagingSenderId: "345995672577",
  appId: "1:345995672577:web:1bd802e604e4ef90849400"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth