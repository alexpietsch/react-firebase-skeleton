import firebase from "firebase/app"
import 'firebase/firestore'
import "firebase/auth"

const firebaseConfig = {
    // Add your firebase config here
    // https://firebase.google.com/docs/web/setup?authuser=0&hl=de#add-sdks-initialize 
};

firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }