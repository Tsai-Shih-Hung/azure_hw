<template>
<div >
    <div class="header">
        <div class="alert alert-danger" role="alert">
        A simple primary alert—check it out!
      </div>
    <div class='main'></div>

    <div class="footer"></div> 

      <div id="app" class="container">
              <form id="form" class="form-inline" v-on:submit.prevent="add">
                <div class="form-group">
                  <input type="text" id="bookTitle" class="form-control" v-model="text.text">
                </div>
                <input type="submit" class="btn btn-primary" value="Add">
              </form>
        </div>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
import toastr from 'toastr'
 const firebaseConfig = {
    apiKey: "AIzaSyBwQyIWqWbIxmNGD8_lztUXRiENQmTabcg",
    authDomain: "psychic-lens-293006.firebaseapp.com",
    databaseURL: "https://psychic-lens-293006-default-rtdb.firebaseio.com",
    projectId: "psychic-lens-293006",
    storageBucket: "psychic-lens-293006.appspot.com",
    messagingSenderId: "345090597042",
    appId: "1:345090597042:web:5030b9e8830ce0a68069ab"
  };

  let app = Firebase.initializeApp(firebaseConfig)
  let db = app.database()
  let textRef = db.ref('texts')


export default {
  name: 'HelloWorld',
  firebase: {
    text: textRef
  },
  props: {
    msg: String,
  },
   data () {
    return {
      text: {
          text: ''
      }
    }
  }, 
   methods: {
      add: function () {
        textRef.push(this.text);
        this.text.text = '';
        toastr.success('Added');
        db.ref("texts").once('value', function (snapshot) {
        var data = snapshot.val();
        console.log(data);
});
      }
    },
   
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
  @import "~bootstrap/scss/bootstrap";
</style>
