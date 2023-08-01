import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBdzmbpIpUsBCSHKduB4uzEUkp6e7sf7IM",
  authDomain: "c75-project-400f4.firebaseapp.com",
  projectId: "c75-project-400f4",
  storageBucket: "c75-project-400f4.appspot.com",
  messagingSenderId: "1085508493005",
  appId: "1:1085508493005:web:fd18087810ef64d6cd5384"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
