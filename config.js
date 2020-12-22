import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyClQTDpLAIOmQsson0Dj8SEiIVz2kX1w5M",
    authDomain: "barter-b1f29.firebaseapp.com",
    projectId: "barter-b1f29",
    storageBucket: "barter-b1f29.appspot.com",
    messagingSenderId: "466773778686",
    appId: "1:466773778686:web:c584c7a4a99a829e5805af"
  };

firebase.initializeApp(firebaseConfig)
export default firebase.firestore()
