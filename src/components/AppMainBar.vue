<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Main Bar</ion-title>
      <ion-buttons slot="secondary">
        <ion-button fill="solid" @click="router.push('/sub')">
          Go To Sub Page
        </ion-button>
    </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/vue";
import { useRouter } from 'vue-router'

export default {
  name: "AppMainBar",
  components: {
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar
  },
  setup () {
    return {
      router: useRouter()
    }
  }
};
</script>

<style>
</style>
