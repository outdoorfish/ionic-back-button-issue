import App from "./App.vue";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "@ionic/vue-router";
import { IonicVue } from "@ionic/vue";
import "@ionic/vue/css/core.css";

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("./views/MainView.vue"),
    redirect: '/a',
    children: [
      {
        path: 'a',
        name: 'mainA',
        component: () => import('./views/main/AView.vue'),
      },
      {
        path: 'b',
        name: 'mainB',
        component: () => import('./views/main/BView.vue'),
      },
      {
        path: 'c',
        name: 'mainC',
        component: () => import('./views/main/CView.vue'),
      },
      {
        path: 'd',
        name: 'mainD',
        component: () => import('./views/main/DView.vue'),
      },
    ]
  },
  {
    path: '/sub',
    name: 'sub',
    redirect: '/sub/1',
    component: () => import('./views/SubView.vue'),
    children: [
      {
        path: '1',
        name: 'sub1',
        component: () => import('./views/sub/1View.vue')
      },
      {
        path: '2',
        name: 'sub2',
        component: () => import('./views/sub/2View.vue')
      }
    ]
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});
const app = createApp(App)
  .use(IonicVue, {
    mode: "ios"
  })
  .use(router);

router.isReady().then(() => {
  app.mount("#app");
});
