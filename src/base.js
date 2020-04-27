import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyDMWwv3xnZiChiEyKP-r3jqXETLjwT6-ZM",
    authDomain: "catch-of-the-day-elsa-3e34e.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-elsa-3e34e.firebaseio.com",
  
})

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };
//this is a default export
export default base;