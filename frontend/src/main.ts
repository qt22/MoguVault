import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

// Global Components
import '@/plugins/vee-validate';

// Styles
import '@fontsource/source-sans-pro';
import './sass/styles.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
