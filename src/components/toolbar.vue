<template>
<div>
  <!-- Two-way Data-Binding -->
  <div class="container">
        <div class="row">
            <div class="col-9 mt-3">
                <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-secondary " @click.prevent='edit'>編輯</button>
                </div>
                <div class="main">
                <h2>109學年度_資管系新生看過來!資訊教育營隊即將開放報名，請不要錯過喔!</h2>
                
                各位同學好，
                歡迎你們加入淡江資管的大家庭，
                系上擬為大一新生同學安排營隊活動：運算思維-資訊導入-資訊教育營隊，共有兩個梯次，借此讓同學們接觸淡江大學的資訊環境，
                每梯次名額30位，如果報名人數超過30位，將依各位報名的順序來決定參加資格，請見諒。
                日期：第一梯次 9/8(二)，第二梯次9/9(三) ，
                時間：9:00~16:00，
                地點：商管大樓2樓 B206電腦教室。
                預計8/11(二)開放報名，屆時會再以簡訊通知各位同學上網報名，有興趣的同學，請不要錯過喔。
                8/24(一)下午三點報名截止，8/25 E-MAIL及簡訊通知上課資訊，
                若因故需要取消，請於8/27(四)之前E-MAIL(tlmx@oa.tku.edu.tw)或電話(02-26215656#2645)聯絡取消事宜，謝謝。
                遞補名單將於9/1(三)另行通知，屆時請留意E-mail及簡訊。
               </div>
            

 
  
   <button type="button" class="btn btn-secondary" @click.prevent='cancel' v-if="quill==true">取消</button>
   <button type="button" class="btn btn-secondary" @click.prevent='conform' v-if="quill==true">確認</button>
   
    </div>
  <!-- Or manually control the data synchronization -->
  <!-- <quill-editor
    :content="content"
    :options="editorOption"
    @change="onEditorChange($event)"
  /> -->
            
            <div class="col-3 mt-3">
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
// //   //You can also register Quill modules in the component
// import Quill from 'quill';
// import someModule from '../yourModulePath/someQuillModule.js';
// Quill.register('modules/someModule', someModule);

// import Firebase from '../firebase/db'
// import toastr from 'toastr'

// import $ from 'jquery'
//  const firebaseConfig = {
//   apiKey: "AIzaSyBwQyIWqWbIxmNGD8_lztUXRiENQmTabcg",
//   authDomain: "psychic-lens-293006.firebaseapp.com",
//   databaseURL: "https://psychic-lens-293006-default-rtdb.firebaseio.com",
//   projectId: "psychic-lens-293006",
//   storageBucket: "psychic-lens-293006.appspot.com",
//   messagingSenderId: "345090597042",
//   appId: "1:345090597042:web:81fdabce470282358069ab"
// };
//   let app = Firebase.initializeApp(firebaseConfig)
//   let db = app.database()
//   let textRef = db.ref('texts')  


//   export default {
//     props: {
//         msg: String,
//     },
//     data () {
//       return {
//         content: 'I am Example',
//         editorOption: {
//           // Some Quill options...
//         },
//         text: {
//           text: ''
//         },
//         districts: [],
//         word_two:'',
//         word_one:'',
//         quill:false,
//          documents: [],
//       }
//     },
     

//     methods: {
//       onEditorBlur(quill) {
//         //console.log('editor blur!', quill)
//       },
//       onEditorFocus(quill) {
//         //console.log('editor focus!', quill)
//       },
//       onEditorReady(quill) {
//         //console.log('editor ready!', quill)
//       },
//       onEditorChange({ quill, html, text }) {
//         //console.log('editor change!', quill, html, text)
//         this.content = html
//       },
//       edit(){
//         console.log(this.content);
//       },
//       conform() {
//         console.log('conform');
//         //console.log(this.word_one);
//         //console.log('content',this.content);
//         this.text.text=this.content;
//         console.log('this.text.text',this.text.text);
//         textRef.push(this.text);
//         this.text.text = '';
//         toastr.success('Added');
//         db.ref("texts").once('value', function (snapshot) {
//         var data = snapshot.val();
//         console.log(data);
        
//         let vm=this;
//         vm.temp=data;
//         console.log('this is temp',vm.temp);
//     });

//     },
//     edit(){
//         console.log('觸發edit');
//         //打開quill
//         this.quill=true;
//         //取值
//         this.word_one=document.getElementsByClassName('main')[0].innerHTML;
//         this.content=this.word_one;

//     },

//     cancel(){
//          this.quill=false;
//     },

    
//     computed: {
//       editor() {
//         return this.$refs.myQuillEditor.quill
//       }
//     },
//     mounted() {
//       console.log('this is current quill instance object', this.editor)
//     },
//     created(){
//         console.log('success toolbar');
//     }
//   }}
// </script>

// <style lang="scss">
//     @import "../assets/all.scss";
// </style>