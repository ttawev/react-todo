import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDLhHnXXsed-4F-nfkEQcwjAH7pQs1Gizo",
  authDomain: "todo-664c7.firebaseapp.com",
  databaseURL: "https://todo-664c7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-664c7",
  storageBucket: "todo-664c7.appspot.com",
  messagingSenderId: "238415947404",
  appId: "1:238415947404:web:c20978a9ffb6c8ccf03da9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)