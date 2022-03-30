<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>Sub Bar</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/vue";
export default {
  name: "AppSubBar",
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar
  },
};
</script>

<style>
</style>
