import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpx4H7DkpZpEUuGznSgRG4sCXrThe5If8",
  authDomain: "my-assignment--11.firebaseapp.com",
  projectId: "my-assignment--11",
  storageBucket: "my-assignment--11.appspot.com",
  messagingSenderId: "1000393500158",
  appId: "1:1000393500158:web:f1c3b69624556c9d21ccaf",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
