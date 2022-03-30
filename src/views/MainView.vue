<template>
  <ion-page>
    <app-main-bar />
    <ion-content>
      <ion-tabs>
        <ion-router-outlet />
        <ion-tab-bar>
          <ion-tab-button
            v-for="button in tabs"
            :key="button.tab"
            :tab="button.tab"
            :href="button.href"
          >
            <ion-label>
              {{ button.tab }}
            </ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonContent, IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet } from "@ionic/vue";
import AppMainBar from '../components/AppMainBar.vue'

export default defineComponent({
  name: "MainView",
  components: { IonPage, IonContent, IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet, AppMainBar },
  setup () {
    return {
      tabs: [
        {
          tab: 'A',
          href: '/a'
        },
        {
          tab: 'B',
          href: '/b'
        },
        {
          tab: 'C',
          href: '/c'
        },
        {
          tab: 'D',
          href: '/d'
        }
      ]
    }
  }
});
</script>