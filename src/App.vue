<template>
  <div id="app">
    <div id="header" class="d-flex justify-content-end bg-tku"> 
      <div class="mx-3"><a href="#" class="text-dark">首頁</a></div>
      <div class="mx-3"><a href="#" class="text-dark">首頁</a></div>
    </div>

    <div>
      <carousel/>
    </div>
  <div>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>

    <div id="footer" >
        <div class='first_line'>
            <span>電話: (02)2621-5656 內線 2645 或 2648</span>
            <span>傳真: (02)2620-9737</span>
            <span>Email: tlmx@oa.tku.edu.tw</span>
        </div>
        <ul >
          <li >網頁維護: 簡詩婷, 邱瑜瑩</li>
          <li>個資保護聯絡窗口: 簡詩婷</li>
          <li>尊重與保護智慧財產權，不法影印是違法的行為。請使用正版教科書，勿不法影印他人著作，以免觸法。</li>
        </ul>
        <span>© 淡江大學資訊管理學系 B1111 商管大樓11樓11號個資政策隱私權政策個人資料告知聲明</span>   
    </div>
    
  </div>
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
//import navbar from './components/navbar.vue';
import carousel from './components/carousel.vue';
//import container from './components/container';
//import dashboard from './components/dashboard.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    carousel,
  },

};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: px;
}


</style>
