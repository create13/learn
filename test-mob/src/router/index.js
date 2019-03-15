import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'barCharts',
            component: () => import('@/views/barCharts')
        },
        {
            path: '/pieCharts',
            name: 'pieCharts',
            component: () => import('@/views/pieCharts')
        }
    ]
})
