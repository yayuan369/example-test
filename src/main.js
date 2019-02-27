// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'



import Home from './components/HelloFromVux'
import test from './pages/test.vue'
import wave from './pages/wave.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
},
{
  path: '/test',
  name: 'test',
  component: test
},
{
  path: '/wave',
  name: 'wave',
  component: wave
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
