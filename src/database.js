import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "#",
    authDomain: "#",
    projectId: "#",
    storageBucket: "#",
    messagingSenderId: "#",
    appId: "#"
}

const db = firebase.initializeApp(config);

export default db;