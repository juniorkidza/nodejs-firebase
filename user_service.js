const firebase = require("firebase/app");
const auth = require("firebase/auth");


const apiKey = process.env.FIRE_BASE_API_KEY

const fb = firebase.initializeApp({
  apiKey,
});

exports.authenticate = async (email, password) => {
  const userCredential = await fb.auth().signInWithEmailAndPassword(email, password);
  return userCredential.user.getIdToken();
}

exports.getToken = async (forceNewToken = false) => {
  return fb.auth().currentUser.getIdToken(forceNewToken)
}