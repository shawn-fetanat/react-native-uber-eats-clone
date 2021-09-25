import firebase from "firebase";
import {FIREBASE_API_KEY} from "../secrets/api_keys";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const auth = app.auth();
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export {auth, db, timestamp};
