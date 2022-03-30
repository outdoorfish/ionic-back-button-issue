<template>
  <ion-page>
    <app-sub-bar />
    <ion-content>
      <ion-router-outlet />
    </ion-content>
    <ion-footer>
      <router-link
        v-for="link in links"
        :key="link.name"
        :to="link.href"
        replace
      >
        {{ link.name }}
      </router-link>
    </ion-footer>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonContent, IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet } from "@ionic/vue";
import AppSubBar from '../components/AppSubBar.vue'

export default defineComponent({
  name: "SubView",
  components: { IonPage, IonContent, IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet, AppSubBar },
  setup () {
    return {
      links: [
        {
          name: 'sub1',
          href: '/sub/1'
        },
        {
          name: 'sub2',
          href: '/sub/2'
        }
      ]
    }
  }
});
</script>