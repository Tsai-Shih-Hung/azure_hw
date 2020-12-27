<template>
    <div >
      <div id="navbar">
        <b-navbar toggleable="md" type="dark" >
          <b-navbar-brand href="#">
            淡江大學資訊管理學系
            </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>     
          <b-collapse id="nav-collapse" is-nav  > 
            <b-navbar-nav>
              <b-nav-item ><router-link to="/"><span style="color:white">最新消息</span> </router-link></b-nav-item>
              <b-nav-item href="#"> <router-link to="/freshman_out"><span style="color:white">大一新鮮人專區</span></router-link></b-nav-item>
              <b-nav-item href="#"> <router-link to="/department_out"><span style="color:white">系所招生簡介</span></router-link></b-nav-item>
              <b-nav-item href="#"> 本系成員</b-nav-item>
              <b-nav-item href="#"> 交換生專區</b-nav-item>
            </b-navbar-nav>      
          </b-collapse>
        </b-navbar>
      </div>
    </div>
</template>

<script>
export default {
  methods:{
    test(){
      console.log('success');
    }
  }
}
</script>


<style lang="scss">
@import "../assets/all.scss";

body {
  padding-bottom: 0px;
}

.navbar {
  margin-bottom: 0px;
}

#nav,#navbar{
  background-color:#0e83cd ;
}



</style>