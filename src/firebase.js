// Import the functions you need from the SDKs you need

//  import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyByukCGXQ7BvIW6B-3opOyUcKiE2S0osTU",
  authDomain: "becsdb.firebaseapp.com",
  projectId: "becsdb",
  storageBucket: "becsdb.appspot.com",
  messagingSenderId: "286294799839",
  appId: "1:286294799839:web:a13339ee6e06d51faac06a",
  measurementId: "G-2GK87ZKZXG"
};

// Initialize Firebase
//const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = (firebase.initializeApp(firebaseConfig)).firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;
// const analytics = getAnalytics(app);