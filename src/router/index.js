import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            name:'dashboard',
            path:'/dashboard',
            component: ()=>import('../components/dashboard.vue'),    
            children:[
                {
                    path:'container',
                    name:'container',
                    component:()=>import('../components/container.vue'),
                }
            ]  
        },
   
        {
            name:'toolbar',
            path:'/toolbar',
            component:()=>import('../components/toolbar.vue'),
        }
    ]
})