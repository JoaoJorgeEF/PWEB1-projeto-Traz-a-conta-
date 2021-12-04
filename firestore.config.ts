// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const FirebaseConfig = {
  firebase: {
  apiKey: 'AIzaSyAOCQnEn_355BP0AhsDOrLNxgsNCYdWkqw',
  authDomain: 'traz-a-conta.firebaseapp.com',
  projectId: 'traz-a-conta',
  storageBucket: 'traz-a-conta.appspot.com',
  messagingSenderId: '4974374761',
  appId: '1:4974374761:web:90cb1c55f101d333f017f8',
  measurementId: 'G-0ZMH43S95W'
  }
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig.firebase);
const analytics = getAnalytics(app);
