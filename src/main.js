import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import './assets/scss'
import hView from '@/components'
import store from '@/store'
// import 'vant/lib/index.css'
// import { Loading } from 'vant'
import Loading from 'vant/lib/loading'
import 'vant/lib/loading/style'
import { Hello, MuhSku } from 'vue-muh'

Vue.config.productionTip = false

global.vbus = new Vue()

Vue.use(hView)
   .use(Loading)
   .use(Hello)
   .use(MuhSku)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
