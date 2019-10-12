import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as filters from "./filter";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueDND from "awe-dnd";

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.use(VueDND);

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
