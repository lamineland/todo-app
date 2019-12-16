// src/firebase.js
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/app'
// import 'firebase/<PACKAGE>'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBC0H9rp907etgD4K06czolaG2UbOZ3xg8",
    authDomain: "doopies.firebaseapp.com",
    databaseURL: "https://doopies.firebaseio.com",
    projectId: "doopies",
    storageBucket: "doopies.appspot.com",
    messagingSenderId: "567024058151",
    appId: "1:567024058151:web:48f522084d9b61d5d33302"
}
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase