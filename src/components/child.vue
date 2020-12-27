<template>
    <div>  
        <div class="container">
            <div class="row">
                <div class="col-md-9 mt-3">
                    <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-outline-secondary btn-sm d-flex justify-content-end"  @click.prevent='edit()'>編輯</button>
                    </div>
                    <div class="mb-3"  v-if="changequill==true">
                        <label for="exampleInputEmail1" class="form-label">編輯title</label>
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
                        
                    <div class="title" v-text="documents[this.$route.params.id].title"></div>          
                    <div class="main" v-html="documents[this.$route.params.id].content"></div> 
                    <div class="d-flex justify-content-end">                
                        <button type="button" class="btn btn-secondary" @click.prevent='cancel' v-if="changequill==true">取消</button>
                        <button type="button" class="btn btn-secondary" @click.prevent='conform()' v-if="changequill==true">確認</button>
                   </div>        
                </div>
                <div class="col-md-3 mt-3">
               <div class="pb-3">
                    <ul class="text-left list-unstyled;">
                        <li><h4>系所姊妹校</h4></li>
                        <hr>
                        <li><a href="#">瑞典斯德哥爾摩大學 資訊與系統科學系</a></li>     
                        <li><a href="#">馬來西亞 雙威大學 電腦與資訊系統學系</a></li> 
                        <li><a href="#">國際姊妹校專區</a></li>   
                    </ul>  
                </div>   
                 <div class="pb-3">
                    <ul class="text-left ">
                        <li><h4>研究中心</h4></li>
                        <hr>
                        <li><a href="#">資訊科技使用行為研究中心</a></li>       
                    </ul>  
                </div>  
                 <div class="pb-3">
                    <ul class="text-left ">
                        <li><h4>學生自治組織</h4></li>
                        <hr>
                        <li><a href="#">Tkuim 淡江資管系學會</a></li>     
                        <li><a href="#">TKU iOS CLUB 資訊顧問社</a></li> 
                        <li><a href="#">資管網路策進會</a></li>   
                        <li><a href="#">資訊應用策進會</a></li>  
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

var textRef=db.ref('documents');

export default {
    props:['changequill','title'],
    date(){
        return{
            documents: [],
            temp:[],
            content: '<h2>I am Example</h2>',
            editorOption: {
        // Some Quill options...
             },
        }
    },
    firebase: {
    documents: db.ref('documents'),
   },
   methods:{
        edit(){
         let vm =this;   
         vm.content=vm.documents[this.$route.params.id].content;
         console.log('edit',vm.content);
         vm.changequill=true;
         console.log('open change to',vm.changequill);
      },
      conform(){
        let vm =this;
        var num = vm.documents[this.$route.params.id];
        console.log('conform',num)
        console.log('conform',vm.documents[this.$route.params.id])
        console.log('conform',vm.documents[this.$route.params.id].content)
        //console.log(num)
        textRef.child(this.$route.params.id).update({title:vm.title,content:vm.content});
        console.log('success');
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
    created(){
        let vm=this;
        console.log('child內',vm.documents);
        console.log('child內',vm.documents[this.$route.params.id].content);
        vm.item=vm.documents[this.$route.params.id].content;
        vm.title=vm.documents[this.$route.params.id].title;
        console.log(vm.item);
        console.log(this.$route.params.id);
        
        //console.log(textRef.child(vm.documents[0][this.$route.params.id]).content);
    },
    
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },

    mounted() {
      //console.log('this is current quill instance object', this.editor);
    }
}
</script>

<style scoped>
.title{
    font-size: 30px;
}
</style>