import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCvZh1Hd_F_2nthhfgHU2zB6206h79pcD0",
    authDomain: "dakshin-sahodaya.firebaseapp.com",
    projectId: "dakshin-sahodaya",
    storageBucket: "dakshin-sahodaya.appspot.com",
    messagingSenderId: "857423864447",
    appId: "1:857423864447:web:411462177c64b8a70b154a",
    measurementId: "G-2MHXRKQL07"
  };
  
 
    
  if(firebase.apps.length === 0 ){
    firebase.initializeApp(firebaseConfig)
  }
  const app = firebase.app()
  export const auth = firebase.auth()
  
  
  export default firebase