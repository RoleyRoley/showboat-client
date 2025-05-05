import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Firebase configuation
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};


// Firebase initilisation
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };