import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import * as serviceWorker from "./serviceWorker";
import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmjgwVhGcUNAgz2y5hnu0UHd7P5UvE8yQ",
  authDomain: "cart-22f38.firebaseapp.com",
  projectId: "cart-22f38",
  storageBucket: "cart-22f38.appspot.com",
  messagingSenderId: "722132468771",
  appId: "1:722132468771:web:15b2277b200963370b9d96",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
