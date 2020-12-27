<template>
  <div>
     <div class="container">
       <div class="row">
         <div class="col-md-9 mt-3 mb-5">
           <div class="ml-3 topic d-flex justify-content-between">
              系所招生簡介
            <div>
            <button type="button" class="btn btn-secondary " @click.prevent='add()'>新增</button>
            <button type="button" class="btn btn-secondary " @click.prevent='conform()'>確定新增</button>
            </div>
        </div>
            <div class="mb-3"  v-if="changequill==true">
                        <label for="exampleInputEmail1" class="form-label">標題</label>
                        <input type="text" class="form-control" aria-describedby="emailHelp" v-model="title">                       
                    </div>
           <quill-editor
                            ref="myQuillEditor"
                            v-model="content"
                            :options="editorOption"
                            @blur="onEditorBlur($event)"
                            @focus="onEditorFocus($event)"
                            @ready="onEditorReady($event)"
                            v-if="changequill==true"
            />
            
           <div class="outside ml-2 m-3 pt-3" v-for="(item,key) in documents" :key="item.id" @click="changesite(item,key)">
              <div class="title" v-text="item.title"></div>
              <div class="main mt-2 mb-2" v-html="item.content"></div>
        </div>
         </div>
        <div class="col-md-3 mt-3">
            <div class="pb-3">
                <ul class="text-left list-unstyled;">
                        <li><h4>系所姊妹校</h4></li>
                        <hr>
                        <li><a href="http://dsv.su.se/en/">瑞典斯德哥爾摩大學 資訊與系統科學系</a></li>     
                        <li><a href="https://university.sunway.edu.my/sci-tech/research/comp-is">馬來西亞 雙威大學 電腦與資訊系統學系</a></li> 
                        <li><a href="http://nw3.tku.edu.tw/sister/index.asp#main">國際姊妹校專區</a></li>   
                        </ul>  
                        </div>   
                        <div class="pb-3">
                            <ul class="text-left ">
                                <li><h4>研究中心</h4></li>
                                <hr>
                                <li><a href="http://www.im.tku.edu.tw/tw/2019/07/23/%e6%b7%a1%e6%b1%9f%e5%a4%a7%e5%ad%b8%e8%b3%87%e8%a8%8a%e7%a7%91%e6%8a%80%e4%bd%bf%e7%94%a8%e8%a1%8c%e7%82%ba%e7%a0%94%e7%a9%b6%e4%b8%ad%e5%bf%83/">資訊科技使用行為研究中心</a></li>       
                            </ul>  
                        </div>  
                        <div class="pb-3">
                            <ul class="text-left ">
                                <li><h4>學生自治組織</h4></li>
                                <hr>
                                <li><a href="https://www.instagram.com/tkuim/">Tkuim 淡江資管系學會</a></li>     
                                <li><a href="https://sites.google.com/a/gms.tku.edu.tw/tku-ios-club/">TKU iOS CLUB 資訊顧問社</a></li> 
                                <li><a href="https://www.facebook.com/Imna%E7%B6%B2%E8%B7%AF%E7%AD%96%E9%80%B2%E6%9C%83-1751956238408832/?modal=admin_todo_tour&notif_id=1556726982752057&notif_t=page_invite">資管網路策進會</a></li>   
                                <li><a href="https://www.facebook.com/TKUB310">資訊應用策進會</a></li>  
                        </ul>
                    </div>
            </div>
       </div>
      </div>
  </div>
</template>
<script>
import { db } from '../firebase/db'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
 
import { quillEditor } from 'vue-quill-editor'

var textRef=db.ref('department');

export default {
  props:['addtitle','addcontent','changequill','title'],
  data() {
    return {
      documents: [],
      temp:[],
      content: '',
            editorOption: {
        // Some Quill options...
             },
    }
  },
  firebase: {
    documents: db.ref('department'),
  }, 
  methods:{
    show(){
      let vm=this;
      textRef.push({content:'要記得吃藥'});
      console.log(vm.documents);
      console.log(vm.documents[1][".key"]);
      console.log(vm.documents[2][".key"])
      textRef.once('value',function(snapshot){
      var str=snapshot.val();
      console.log('str',str);
      })
    },  
      changesite(item,key){
        let vm =this;
          //console.log('123');
          //console.log(vm.documents[key][".key"]);
          vm.$router.push({ path: `/department_in/${vm.documents[key][".key"]}`})
      },
      add(){
          
          let vm =this;
          vm.changequill=true;
         
      },
      conform(){
          let vm =this;
          textRef.push({title:vm.title,content:vm.content});
          vm.title="";
          vm.content="";
          vm.changequill=false;
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
      }

  },
   computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
}
</script>

<style scoped>
 .main{
   font-size: 16px;
   max-width: 100%;

overflow: hidden;

text-overflow: ellipsis;

white-space: nowrap;
   
 }

 .outside:hover{
   background-color: #e3e3e3;
 }
 .outside{
   
   
   cursor: pointer;
   
   height:150px;
   overflow: hidden;
   border-top: 1px solid #e3e3e3;
   
 }
 .title{
   font-size: 20px;
 }

 .topic{
   font-size:25px;
 }
</style>