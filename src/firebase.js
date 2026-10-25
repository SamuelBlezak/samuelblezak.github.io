import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCsbo9khFybwLgClI8IoBuf3NvvW7pvnWQ",
  authDomain: "portfolio-pet.firebaseapp.com",
  projectId: "portfolio-pet",
  storageBucket: "portfolio-pet.firebasestorage.app",
  messagingSenderId: "1062836587645",
  appId: "1:1062836587645:web:d974b1d369dc434fe1f514",
  measurementId: "G-FCT30D2HPK"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)