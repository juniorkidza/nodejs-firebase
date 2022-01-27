const firebase = require("firebase/app");
require("firebase/auth");

const apiKey = process.env.FIREBASE_API_KEY;
console.log('apiKey: ', apiKey)
const fb = firebase.initializeApp({
  apiKey: apiKey,
});

exports.authenticate = (email, password) =>
  fb.auth().signInWithEmailAndPassword(email, password);