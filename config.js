import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyBcRqFRFGcv4I8_M1UEn_1EH7R0eSHeZjo",
    authDomain: "c58-databases.firebaseapp.com",
    databaseURL: "https://c58-databases.firebaseio.com",
    projectId: "c58-databases",
    storageBucket: "c58-databases.appspot.com",
    messagingSenderId: "765547584340",
    appId: "1:765547584340:web:9ae321972b9f1ad2d506c1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();