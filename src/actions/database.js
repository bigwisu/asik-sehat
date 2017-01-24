import firebase from 'firebase';

const config = {
    apiKey: "APIKeynyaAdaDiSini",
    authDomain: "asik-sehat.firebaseapp.com",
    databaseURL: "https://asik-sehat.firebaseio.com",
    storageBucket: "asik-sehat.appspot.com",
    messagingSenderId: "IDnyaMessaging"
}

firebase.initializeApp(config);

const database = firebase.database();

export default database;