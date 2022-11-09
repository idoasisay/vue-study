import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import mixins from './mixins';
createApp(App)
  .use(router)
  .mixin(mixins)
  .directive('focus', {
    mounted(el) {
      el.focus();
      console.log(1);
    },
  })
  .mount('#app');
