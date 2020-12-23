<template>
  <div>

     <quill-editor
    ref="myQuillEditor"
    v-model="content"
    :options="editorOption"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @ready="onEditorReady($event)"
    v-if="quill==true"
  />
    <button type="button" class="btn btn-secondary " @click.prevent='add()'>新增</button>
    <button type="button" class="btn btn-secondary " @click.prevent='conformadd()'>確定新增</button>
    
    <button @click.prevent="show()">資料庫內容</button>
    <div v-for="(item,key) in documents" :key="item.id">
      {{item.content}}    
      <button type="button" class="btn btn-secondary " @click.prevent='edit(item,key)'>編輯</button>
      <button type="button" class="btn btn-secondary" @click.prevent='cancel' v-if="quill==true">取消</button>
      <button type="button" class="btn btn-secondary" @click.prevent='conform(item,key)' v-if="quill==true">確認</button>

    </div>
  </div>
</template>
<script>
import { db } from '../firebase/db'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
 
import { quillEditor } from 'vue-quill-editor'


var textRef=db.ref('documents');

export default {
  data() {
    return {
      documents: [],
      temp:[],
      content: '<h2>I am Example</h2>',
      editorOption: {
        // Some Quill options...
      },
      quill:false
    }
  },
  firebase: {
    documents: db.ref('documents'),
  }, 
  methods:{
    show(){
      let vm=this;
      textRef.push({content:'要記得吃藥'});
      console.log(vm.documents);
      textRef.once('value',function(snapshot){
      var str=snapshot.val();
      console.log('str',str);
      })
    }, 
    onEditorBlur(quill) {
        //console.log('editor blur!', quill)
      },
      onEditorFocus(quill) {
        //console.log('editor focus!', quill)
      },
      onEditorReady(quill) {
        //console.log('editor ready!', quill)
      },
      onEditorChange({ quill, html, text }) {
        //console.log('editor change!', quill, html, text)
        this.content = html
      },
      edit(item,key){
        let vm =this;
        console.log('item,key',item,key);
        
        vm.content=item.content;
        vm.quill=true;
      },
      conform(item,key){
        let vm =this;
        console.log('confrom',item,key,vm.content);
        console.log('item.id',key);
        textRef.child(key).update({content:vm.content});
        console.log('success');
        vm.quill=false;
      },
      conformadd(){
         let vm =this;
         textRef.push({content:vm.content});
      },
      add(){
         let vm =this;
         vm.quill=true;
      }

  },
  computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    mounted() {
      //console.log('this is current quill instance object', this.editor)
    }

}
</script>