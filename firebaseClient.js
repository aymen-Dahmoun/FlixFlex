import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2LpCqCdgdyFNLGN-t7STHRCUxZmfZOtY",
  authDomain: "flicsflex.firebaseapp.com",
  projectId: "flicsflex",
  storageBucket: "flicsflex.firebasestorage.app",
  messagingSenderId: "357045935771",
  appId: "1:357045935771:web:03ac903f01a0e54e67303e",
  measurementId: "G-S0PM7T9YWK"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage)
});