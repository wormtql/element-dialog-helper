import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

import ElDialogHelper from "./el-dialog-helper";

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(ElDialogHelper);

new Vue({
  render: h => h(App),
}).$mount('#app')
