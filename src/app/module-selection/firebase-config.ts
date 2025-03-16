import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc, getDocs, query, where, doc, setDoc } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAQVFtz-7J6ZXzxN3MZevilpOawEegx31w",
  authDomain: "smart-enroll-76b83.firebaseapp.com",
  projectId: "smart-enroll-76b83",
  storageBucket: "smart-enroll-76b83.firebasestorage.app",
  messagingSenderId: "279718831900",
  appId: "1:279718831900:web:ef774c5ee3460da8d63cd9",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth, collection, addDoc, getDocs, query, where, doc, setDoc }
