import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1SJ5qNGXRsVNGRKkM5s8QBqNStmQz84k",
  authDomain: "twitter-clone-656c7.firebaseapp.com",
  projectId: "twitter-clone-656c7",
  storageBucket: "twitter-clone-656c7.appspot.com",
  messagingSenderId: "585253130037",
  appId: "1:585253130037:web:1b4fdcfa0d0ce59ed6867c",
  measurementId: "G-ENNZK864QR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
