import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC0EkkitqjmoG3jzrNW-HDd0YXjcTwSl1s",
  authDomain: "clothes-db-3f259.firebaseapp.com",
  databaseURL: "https://clothes-db-3f259.firebaseio.com",
  projectId: "clothes-db-3f259",
  storageBucket: "clothes-db-3f259.appspot.com",
  messagingSenderId: "236886747034",
  appId: "1:236886747034:web:dd18a5429c51aefd6d3c23",
  measurementId: "G-X8F3QDFX8W",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* Setting GOOGLE auth */
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
