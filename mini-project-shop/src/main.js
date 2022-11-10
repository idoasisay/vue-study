import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

createApp(App)
  .use(store)
  .mixin(mixins)
  .use(VueSweetalert2)
  .use(router)
  .mount('#app')

// window.kakao.inti('')
