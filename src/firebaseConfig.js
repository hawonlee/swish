import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAY37I5nSllPMjRwMZe1AN0ZkESj4xou9Y",
  authDomain: "swish-18482.firebaseapp.com",
  databaseURL: "https://swish-18482-default-rtdb.firebaseio.com/",
  projectId: "swish-18482",
  storageBucket: "swish-18482.firebasestorage.app",
  messagingSenderId: "315442051048",
  appId: "1:315442051048:web:d55a90081577e46664165d",
  measurementId: "G-XVG5M7R9SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database }