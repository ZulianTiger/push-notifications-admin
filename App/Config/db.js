import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDI18ZTvn6eFpSaD6AojeT49LFfgd5J5-s",
    authDomain: "push-notifications-admin.firebaseapp.com",
    databaseURL: "https://push-notifications-admin.firebaseio.com",
    projectId: "push-notifications-admin",
    storageBucket: "push-notifications-admin.appspot.com",
    messagingSenderId: "921171984888",
    appId: "1:921171984888:web:ce0fb54301f0f8c687560d",
    measurementId: "G-82381ZQVPR"
};

let app = firebase.initializeApp(config);

const db = app.database();
const storage = app.storage();

export {db, storage};