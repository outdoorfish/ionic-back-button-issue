<template>
  <ion-page>
    <ion-content>
      <h1>Sub 1</h1>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonContent, IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet } from "@ionic/vue";

export default defineComponent({
  name: "Sub1View",
  components: { IonPage, IonContent, IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet },
});
</script>