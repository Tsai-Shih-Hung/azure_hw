import firebase from 'firebase/app'
import 'firebase/database'



export const db = firebase
  .initializeApp({ databaseURL: 'https://psychic-lens-293006-default-rtdb.firebaseio.com' })
  .database()