// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import VueResource from 'vue-resource'
import axios from 'axios'

Vue.prototype.$axios = axios

Vue.config.productionTip = false
//Vue.use(VueResource)

router.beforeEach((to, from, next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
