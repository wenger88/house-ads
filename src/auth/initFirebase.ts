import * as firebase from "firebase/app";
import "firebase/auth";
import { FirebaseApp } from "@firebase/app";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

function initFirebase() {
  const apps: FirebaseApp[] = firebase.getApps();
  if (!apps.length) {
    firebase.initializeApp(config);
  }
}

export default initFirebase;
