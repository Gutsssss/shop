import { createRouter, createWebHistory} from 'vue-router'


import shopCatalog from '@/components/shop-catalog.vue';
import shopCart from '@/components/shop-cart.vue';


const routes = [
    {
        path: '/',
        name: 'catalog',
        component: shopCatalog,
        props: true
    },
    {
        path: '/cart',
        name: 'cart',
        component: shopCart,
        props: true
    }
]

const router = createRouter( {
    history:createWebHistory(),
    routes,
})



export default router