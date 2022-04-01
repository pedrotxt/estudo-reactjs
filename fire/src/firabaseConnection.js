
import firebase from "firebase/app";
import 'firebase/firestore';
// Para utilizar a Auth do firebase, precisa importar /auth
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqLIy0rssZJ2VpGOkoMjM4CRq8vRhdl04",
  authDomain: "curso-93c4e.firebaseapp.com",
  projectId: "curso-93c4e",
  storageBucket: "curso-93c4e.appspot.com",
  messagingSenderId: "840588387187",
  appId: "1:840588387187:web:483a881b520e899e175b06",
  measurementId: "G-PVDJLQ1CJT"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;