 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'



 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAL5xNSVraW1ao75tfdfkqmh2Oo8Kut9YU",
    authDomain: "aishani-gdai.firebaseapp.com",
    databaseURL: "https://aishani-gdai.firebaseio.com",
    projectId: "aishani-gdai",
    storageBucket: "aishani-gdai.appspot.com",
    messagingSenderId: "751734523543",
    appId: "1:751734523543:web:b29b704ad57980a5ac0bd2",
    measurementId: "G-2Z97EV6XS3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;