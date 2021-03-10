import firebase from 'firebase';
import  'firebase/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyAfeAlvd7xnBe2Q2eI9ti3-Qmh1t8mr4WE",
  authDomain: "nen-tang-hoc-online.firebaseapp.com",
  projectId: "nen-tang-hoc-online",
  storageBucket: "nen-tang-hoc-online.appspot.com",
  messagingSenderId: "819826537032",
  appId: "1:819826537032:web:f7f03adb3de423d5fd9e7d",
  measurementId: "G-NRPDYGKX4D"
})

  export const auth =  app.auth()
  export default app