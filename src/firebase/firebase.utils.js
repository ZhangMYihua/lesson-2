import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDgi9vVaT_yG4yMMHKq7wLd76Vl1X29Tf0",
    authDomain: "crown-db-d7065.firebaseapp.com",
    databaseURL: "https://crown-db-d7065.firebaseio.com",
    projectId: "crown-db-d7065",
    storageBucket: "crown-db-d7065.appspot.com",
    messagingSenderId: "183849013318",
    appId: "1:183849013318:web:685853771cf7e5d90c7a47",
    measurementId: "G-YFRBH8H01M"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


