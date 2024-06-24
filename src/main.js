import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import vuetify from './plugins/vuetify'
import './assets/styles/main.scss'
import routes from './router'


Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes,
  base: '/',
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.user.username !== ''

  if (to.name !== 'Auth' && !isAuthenticated) next({ name: 'Auth' })
  else if (to.name === 'Auth' && isAuthenticated) next({ name: 'AccountSettings' })
  else next()
})

Vue.use(VueRouter)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
