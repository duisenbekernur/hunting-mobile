<template>
  <router-view />
</template>

<script setup>
import "vuetify/styles";
import "@quasar/extras/mdi-v7/mdi-v7.css";
import { useAppStore } from "stores/app.store.ts";
import { onMounted } from "vue";

const $appStore = useAppStore();

defineOptions({
  name: "App",
});

const initLoc = async () => {
  if ("geolocation" in navigator) {
    await navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      $appStore.clickedPoint = { title: "Астана" };
      $appStore.clickedPoint.coords = [latitude, longitude];
    });
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
};

onMounted(() => {
  initLoc();
});
initLoc();
</script>
