import firebase from "firebase"; 
import React from "react";

const firebaseConfig = {
  apiKey: "AIzaSyB5NhueN6msvPinU1_TbJtcuKWngqxrfto",
  authDomain: "portfolio-web-page-d946b.firebaseapp.com",
  projectId: "portfolio-web-page-d946b",
  storageBucket: "portfolio-web-page-d946b.appspot.com",
  messagingSenderId: "785229692934",
  appId: "1:785229692934:web:70970a5bd95f9aa0a80387"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
const storage= firebase.storage();


export { auth,provider,storage};
export default db;