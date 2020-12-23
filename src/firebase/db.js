
import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
  .initializeApp({
      apiKey: "AIzaSyBwQyIWqWbIxmNGD8_lztUXRiENQmTabcg",
      authDomain: "psychic-lens-293006.firebaseapp.com",
      databaseURL: "https://psychic-lens-293006-default-rtdb.firebaseio.com",
      projectId: "psychic-lens-293006",
      storageBucket: "psychic-lens-293006.appspot.com",
      messagingSenderId: "345090597042",
      appId: "1:345090597042:web:81fdabce470282358069ab"
      })
  .database()

