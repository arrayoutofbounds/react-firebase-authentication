import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAkGnZ66brT_dqMGGhhg6kbLG2YLyRYDpI",
    authDomain: "fir-tuts-d5a14.firebaseapp.com",
    databaseURL: "https://fir-tuts-d5a14.firebaseio.com",
    projectId: "fir-tuts-d5a14",
    storageBucket: "fir-tuts-d5a14.appspot.com",
    messagingSenderId: "673716666219"
};

  // if its not intialised already, then do so.
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};