import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardIndex from '../views/dashboard/Index.vue'
import Home from '../views/dashboard/children/homes/Index.vue'
import Clients from '../views/dashboard/children/clients/Index.vue'
import ClientsShow from '../views/dashboard/children/clients/Show.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',  component: DashboardIndex,
    children: [
      {
        path: '/', name: 'Dashboard', component: Home
      },
      {
        path: '/clients/', name: 'Clintes', component: Clients
      },
      {
        path: '/clients/:id', name: 'Cliente', component: ClientsShow
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
