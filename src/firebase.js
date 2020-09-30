import firebase, { Component } from 'firebase/app';
import 'firebase/database';

  // Your web app's Firebase configuration
  const firebaseConfig = {
   apiKey: "AIzaSyDbeepXRXvgtVtMZimorqCcPDmwcX3C8JE",
   authDomain: "recipes-here.firebaseapp.com",
   databaseURL: "https://recipes-here.firebaseio.com",
   projectId: "recipes-here",
   storageBucket: "recipes-here.appspot.com",
   messagingSenderId: "323876780182",
   appId: "1:323876780182:web:c3a0de67643ca63ed6eab7"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


export default firebase;