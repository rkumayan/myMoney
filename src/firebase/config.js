import firebase from 'firebas/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBb--9NM6v4w523G7WhEzvnK5ojx5wpTOA",
    authDomain: "mymoney-48a75.firebaseapp.com",
    projectId: "mymoney-48a75",
    storageBucket: "mymoney-48a75.appspot.com",
    messagingSenderId: "266596652986",
    appId: "1:266596652986:web:a973d116936611cdba2f83"
  };

// initialize firebase service
firebase.initializeApp(firebaseConfig);

// initialize service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
export {projectFirestore, projectAuth}