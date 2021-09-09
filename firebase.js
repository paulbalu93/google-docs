import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASb19yxa86BBkEuCHltGw76R1I9GpGbvQ",
  authDomain: "docs-clone-598b6.firebaseapp.com",
  projectId: "docs-clone-598b6",
  storageBucket: "docs-clone-598b6.appspot.com",
  messagingSenderId: "423266043842",
  appId: "1:423266043842:web:81ad057ec01f4dd677785b",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
