import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App.vue';
import { store } from "@/store";
import TodoApp from "@/components/TodoApp";
import TodoItemPage from "@/components/TodoItemPage";

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: TodoApp,
  },
  {
    path: '/todo/:id',
    component: TodoItemPage,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  store,
  router,
  render: h => h(App),

}).$mount('#app')
