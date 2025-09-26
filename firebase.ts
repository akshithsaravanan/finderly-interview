// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLdpPTErjtnj8bxu64f14_NhM5c2BuRoM",
  authDomain: "myapp-auth-b2482.firebaseapp.com",
  projectId: "myapp-auth-b2482",
  storageBucket: "myapp-auth-b2482.firebasestorage.app",
  messagingSenderId: "485359268933",
  appId: "1:485359268933:web:6218cbd9b79ddcd8895f2c",
  measurementId: "G-Z962X8SR5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
