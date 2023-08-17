import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGSTNHZN14pKaz3s0d_Adymtp2n9K1HDw",
  authDomain: "mentorsplatform-2670a.firebaseapp.com",
  projectId: "mentorsplatform-2670a",
  storageBucket: "mentorsplatform-2670a.appspot.com",
  messagingSenderId: "519279517489",
  appId: "1:519279517489:web:bf23a240b011f40cd11a10",
};

// init firebase

firebase.initializeApp(firebaseConfig);

// init service

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
