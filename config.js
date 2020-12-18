import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDispnx5cLkZLyztWbbvGgw6N9mqumnEM8",
  authDomain: "booksanta-97f39.firebaseapp.com",
  databaseURL: "https://booksanta-97f39.firebaseio.com",
  projectId: "booksanta-97f39",
  storageBucket: "booksanta-97f39.appspot.com",
  messagingSenderId: "733065447461",
  appId: "1:733065447461:web:09d5fa52552745a91957cc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
