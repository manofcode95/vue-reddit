import * as firebase from 'firebase';

import 'firebase/auth';
import 'firebase/firestore';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBAHNBdrafBBccIdMjkotXBNbXozU77pp8',
  authDomain: 'reddit-91dc6.firebaseapp.com',
  databaseURL: 'https://reddit-91dc6.firebaseio.com',
  projectId: 'reddit-91dc6',
  storageBucket: 'reddit-91dc6.appspot.com',
  messagingSenderId: '612736927976',
  appId: '1:612736927976:web:e5b54a37d7a008c6',
};


firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default firebase;
