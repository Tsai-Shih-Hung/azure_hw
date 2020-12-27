import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            name:'container',
            path:'/',
            component: ()=>import('../components/container.vue'),    
        },   
        {
            path:'/child/:id',
             name:'child',
            component:()=>import('../components/child.vue'),
        },
        {
            name:'freshman',
            path:'/freshman_in/:id',
            component:()=>import('../components/freshman_in.vue'),
        },
        {
            name:'freshman_out',
            path:'/freshman_out',
            component:()=>import('../components/freshman_out.vue'),
        },
        {
            name:'department_in',
            path:'/department_in/:id',
            component:()=>import('../components/department_in.vue'),
        },
        {
            name:'department_out',
            path:'/department_out',
            component:()=>import('../components/department_out.vue'),
        }
        
    ]
})