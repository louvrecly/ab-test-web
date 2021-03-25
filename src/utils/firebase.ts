import firebase from 'firebase/app';
import 'firebase/auth';
import {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_DATABASE_URL,
  REACT_APP_FIREBASE_MEASUREMENT_ID,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET
} from 'variables';

const app = firebase.initializeApp({
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID
});

const auth = app.auth();

export function signUp(email: string, password: string) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function logIn(email: string, password: string) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function logOut() {
  return auth.signOut();
}

export function subscribeToAuth(nextOrObserver: firebase.Observer<any, Error> | ((a: firebase.User | null) => any)) {
  return auth.onAuthStateChanged(nextOrObserver);
}
