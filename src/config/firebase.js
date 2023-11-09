import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAMHsHrcym95nJmqs7_BrCtJYKS_Ghmnz0",
  authDomain: "deplix-database.firebaseapp.com",
  projectId: "deplix-database",
  storageBucket: "deplix-database.appspot.com",
  messagingSenderId: "864678742098",
  appId: "1:864678742098:web:56d4f324d4d5359701378b",
  measurementId: "G-1X9YVZLN4L"
};


const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);