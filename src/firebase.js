import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth'; 

const firebaseConfig = {
  apiKey: 'AIzaSyBibjTQZU_FO7V09fTSqsqehv6oJ1v3No0',
  authDomain: 'pocketnotes-50988.firebaseapp.com',
  projectId: 'pocketnotes-50988',
  storageBucket: 'pocketnotes-50988.appspot.com',
  messagingSenderId: '358087882730',
  appId: '1:358087882730:web:fdb711e9e1e1c34762a493',
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
// Get firestore tools
export const db = fb.firestore(); 
//Get firebase.auth tools
export const auth = fb.auth();
//Get google tools
export const provider = new firebase.auth.GoogleAuthProvider();

// delete note on firestore
export const deleteNote = (id) => {
  db.collection('notes2').doc(id).delete();

  console.log(id);
};

//create collection for notes
export const buildNotes = ( title, body) => db.collection('notes2').doc().set({
  title,
  body,
},
console.log( title, body)

);

//Get data on real time on screen 
export const handleOnRealTime = () => db.collection("notes2");

export const getDataByid = (id) => db.collection("notes2").doc().get().then(() => {
  console.log(id);
})

export const updateNote = () => db.collection("notes2").doc().update().then(() => {
  console.log("Document successfully updated!");
})
.catch((error) => {
  // The document probably doesn't exist.
  console.error("Error updating document: ", error);
});;


