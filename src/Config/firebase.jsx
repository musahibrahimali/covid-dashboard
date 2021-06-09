import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXgfCKpCOQrzb9dwXgJdg5oX9KbUu8goE",
    authDomain: "covid-dashboard-miastudios.firebaseapp.com",
    projectId: "covid-dashboard-miastudios",
    storageBucket: "covid-dashboard-miastudios.appspot.com",
    messagingSenderId: "303196166336",
    appId: "1:303196166336:web:7d7e1384f03a667f53f525",
    measurementId: "G-C67K3GH2B7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const authentication = firebaseApp.auth();
const database = firebaseApp.firebase();

export { database, authentication };
