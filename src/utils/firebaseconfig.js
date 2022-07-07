// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7Ev_G4qVD2CEzlcXSU06iWExeuuEqc18",
  authDomain: "claudio-rodriguez.firebaseapp.com",
  projectId: "claudio-rodriguez",
  storageBucket: "claudio-rodriguez.appspot.com",
  messagingSenderId: "95777805376",
  appId: "1:95777805376:web:ad86d239b9c7a784c0fba5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(firebaseApp);
