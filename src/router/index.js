import Vue from 'vue'
import VueRouter from 'vue-router'

//import dashboard from '../components/dashboard.vue';
import container from '../components/container.vue';


Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            name:'dashboard',
            path:'/dashboard',
            component: ()=>import('../components/dashboard.vue'),    
            children:[
                {
                    path:'/container',
                    name:'container',
                    component:()=>import('../components/container.vue'),
                }
            ]  
        }
    ]
})