import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDiGL0IekGMVJxvY2dMPfPBKvhJzrha-1A",
    authDomain: "chepascakes.firebaseapp.com",
    databaseURL: "https://chepascakes.firebaseio.com",
    projectId: "chepascakes",
    storageBucket: "chepascakes.appspot.com",
    messagingSenderId: "131932927297",
    appId: "1:131932927297:web:9cf70c054008f06dbfddc0",
    measurementId: "G-6S1PWG68R7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;