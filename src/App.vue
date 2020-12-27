<template>
  <div id="app">
    <div id="header" class="d-flex justify-content-end "> 
      <div class="mx-3"><a href="http://www.im.tku.edu.tw/" class="text-dark">淡江資管首頁</a></div>
      <div class="mx-3"><a href="http://www.tku.edu.tw/" class="text-dark">淡江大學首頁</a></div>
    </div>
  <div>
      <navbar/>
  </div>
    <div>
      <carousel/>
    </div>
  <div>
    <div>
      <router-view></router-view> 
    </div>
  <div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>

    <div id="footer" class="d-flex justify-content-center pt-2" >
      <div id="footer_container">
        <div class="container">
          <div class="row first_line d-flex justify-content-around">
            
            <div class="col-md-4"><i class="fas fa-phone-alt" ></i> 電話: (02)2621-5656 內線 2645 或 2648   </div>
            <div class="col-md-4"><i class="fas fa-fax"></i> 傳真: (02)2620-9737   </div>
            <div class="col-md-4"><i class="fas fa-envelope"></i> Email: tlmx@oa.tku.edu.tw  </div>
          
         </div>
        </div>
        <ul >
          <li >網頁維護: 簡詩婷, 邱瑜瑩</li>
          <li>個資保護聯絡窗口: 簡詩婷</li>
          <li>尊重與保護智慧財產權，不法影印是違法的行為。請使用正版教科書，勿不法影印他人著作，以免觸法。</li>
          <li>© 淡江大學資訊管理學系 B1111 商管大樓11樓11號個資政策隱私權政策個人資料告知聲明</li>
        </ul>   
    </div>
    </div>
  </div>
  
</div>
  
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';
//import navbar from './components/navbar.vue';
import carousel from './components/carousel.vue';
import container from './components/container.vue';
//import dashboard from './components/dashboard.vue';
import navbar from './components/navbar.vue'
//import toolbar from './components/toolbar.vue';




export default {
  name: 'App',
  components: {
    container,
    carousel,
    navbar,
    data:function(){
             return {
                 changequill: false ,
                 title:'',
                 addtitle:'',
                 addcontent:'', 
             }
        }
  },

};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import "./assets/all.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
  margin-top: px;
}

#footer{
  background-color:#0e83cd ;
}

#footer_container{
  width:800px;
  color:white;
  
}

ul li{
  list-style: none;
}
</style>
