import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBls6ZpC3RPrVDB2xngi_xiaHlR-ywe2Io",
    authDomain: "primeclone-5c79a.firebaseapp.com",
    projectId: "primeclone-5c79a",
    storageBucket: "primeclone-5c79a.appspot.com",
    messagingSenderId: "403437867145",
    appId: "1:403437867145:web:2c774f926cac13eeb83658",
    measurementId: "G-M0P5WB97B8"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  const auth = firebase.auth();
  
  export { auth, provider, storage };
  export default db;