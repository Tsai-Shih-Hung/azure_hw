<template>
    <div>
        
        dashboard test
        
    <div>
    <sidebar/>
    </div>

    <div>
        <router-view></router-view>
    </div>

    </div>
    
</template>

<script>
import sidebar from './sidebar.vue';

export default {
     components:{
        sidebar,
            
    }
}
</script>