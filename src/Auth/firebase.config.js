import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD137PVa6T1FZTZwLBDRqK7-LGZJEgOmos",
  authDomain: "restaurant-99ab8.firebaseapp.com",
  projectId: "restaurant-99ab8",
  storageBucket: "restaurant-99ab8.appspot.com",
  messagingSenderId: "708910088819",
  appId: "1:708910088819:web:a8140a279f57cda1152006"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;