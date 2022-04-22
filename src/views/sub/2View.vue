<template>
  <ion-page>
    <ion-content>
      <h1>Sub 2</h1>
      <router-link to="/a">a</router-link>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonContent, IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet } from "@ionic/vue";

export default defineComponent({
  name: "Sub2View",
  components: { IonPage, IonContent, IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet },
});
</script>