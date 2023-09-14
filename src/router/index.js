import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientesView from '../views/ClientesView.vue'
import EditClienteView from '../views/EditClienteView.vue'
import AddClienteView from '../views/AddClienteView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: ClientesView
  },
  {
    path: '/novocliente',
    name: 'novocliente',
    component: AddClienteView
  },
  {
    path: '/editarcliente/:id',
    name: 'editcliente',
    component: EditClienteView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
