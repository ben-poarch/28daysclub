// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBKtaQNrNFenxXouV_Q2M8vN9joAE0juDk",
  authDomain: "daysclub-826d7.firebaseapp.com",
  projectId: "daysclub-826d7",
  storageBucket: "daysclub-826d7.appspot.com",
  messagingSenderId: "721083428832",
  appId: "1:721083428832:web:a871d55754331c2900c585",
  measurementId: "G-XB04Q2MJXM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;
