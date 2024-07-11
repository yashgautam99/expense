// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqM3oZbpaSuq5yxDbqWp5oCGwzHAFbDZw",
  authDomain: "expense-ca5f6.firebaseapp.com",
  projectId: "expense-ca5f6",
  storageBucket: "expense-ca5f6.appspot.com",
  messagingSenderId: "230569850644",
  appId: "1:230569850644:web:e777dcf31e9715312cb401",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyD5vqkFgK6V3ax9CQttgKQxgO1G-J9NXvo",
//   authDomain: "expense-tracker-aaad3.firebaseapp.com",
//   projectId: "expense-tracker-aaad3",
//   storageBucket: "expense-tracker-aaad3.appspot.com",
//   messagingSenderId: "892934878414",
//   appId: "1:892934878414:web:7a49ba4a6def088b278c9f",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
// export const db = getFirestore(app)
