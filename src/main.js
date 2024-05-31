import { createApp } from 'vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import App from '@/App.vue';
import router from '@/routes';
//import store from '@/store';
import '@/assets/css/style.css';
/* 
///BOOTSTRAP VUE IS NOT SUSTAINABLE FOR VUE 3 \\\
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
*/
router.beforeResolve((to) => {
    if (to.path) {
      NProgress.start();
    }
  });
  
  router.afterEach(() => {
    NProgress.done();
  });
  

const app = createApp(App);
//app.use(store);
app.use(router);
app.mount('#app');