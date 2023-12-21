// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh1R7DGg4RqOWULRLLaZjr34SSssL6lJE",
    authDomain: "task-managment-2ea98.firebaseapp.com",
    projectId: "task-managment-2ea98",
    storageBucket: "task-managment-2ea98.appspot.com",
    messagingSenderId: "716537105817",
    appId: "1:716537105817:web:f1561e28f0528493dd1708"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;