// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxfI0oBkHxEBm5xSGFBP1q3gwxlC7DkYs",
    authDomain: "conceptual-tow.firebaseapp.com",
    projectId: "conceptual-tow",
    storageBucket: "conceptual-tow.firebasestorage.app",
    messagingSenderId: "542532592723",
    appId: "1:542532592723:web:e54b5d187701ec856612a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);