// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4qvBflN1042yiesoYhLVmeL_5zS9DLR8",
    authDomain: "netflix-1db22.firebaseapp.com",
    projectId: "netflix-1db22",
    storageBucket: "netflix-1db22.appspot.com",
    messagingSenderId: "296744004964",
    appId: "1:296744004964:web:246f129065f5160eda5e71"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;