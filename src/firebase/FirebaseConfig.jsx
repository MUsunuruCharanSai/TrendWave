import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBCM4YHyhKxYClT21LgOXjw3IjPpgxqG9E",
  authDomain: "myfirstapp-b2ddd.firebaseapp.com",
  projectId: "myfirstapp-b2ddd",
  storageBucket: "myfirstapp-b2ddd.appspot.com",
  messagingSenderId: "487665453213",
  appId: "1:487665453213:web:4251fb9a2c8c4bbbd56c74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;