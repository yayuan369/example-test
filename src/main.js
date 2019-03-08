// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'

//引入echarts
import echarts from 'echarts' 
Vue.prototype.$echarts = echarts  //注册组件


import Home from './components/HelloFromVux'
import Test from './pages/test.vue'
import Wave from './pages/wave.vue'
import Mymap from './pages/myMap.vue'
import Myecharts from './pages/myEcharts.vue'
import Myecharts2 from './pages/myEcharts2.vue'
import Myecharts3 from './pages/myEcharts3.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
},
{
  path: '/test',
  name: 'test',
  component: Test
},
{
  path: '/wave',
  name: 'wave',
  component: Wave
},
{
  path: '/myMap',
  name: 'myMap',
  component: Mymap
},
{
  path: '/myEcharts',
  name: 'myEcharts',
  component: Myecharts
},
{
  path: '/myEcharts2',
  name: 'myEcharts2',
  component: Myecharts2
},
{
  path: '/myEcharts3',
  name: 'myEcharts3',
  component: Myecharts3
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
