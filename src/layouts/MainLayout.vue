<template>
  <q-layout view="lHh Lpr lFf">
    <v-app>
      <v-container>
        <q-page-container>
          <router-view />
        </q-page-container>
        <v-bottom-navigation :active="navigationActive" :elevation="6" grow>
          <v-btn @click="goToRoute('home')">
            <v-icon :icon="mdiHome"></v-icon>
            <span>Главная</span>
          </v-btn>

          <v-btn @click="goToRoute('licences')">
            <v-icon :icon="mdiFileDocument"></v-icon>
            <span>Лицензии</span>
          </v-btn>

          <v-btn @click="goToRoute('notifications')">
            <v-icon :icon="mdiBell"></v-icon>
            <span>Уведомления</span>
          </v-btn>

          <v-btn @click="goToRoute('settings')">
            <v-icon :icon="mdiCog"></v-icon>
            <span>Настройки</span>
          </v-btn>
        </v-bottom-navigation>
      </v-container>
    </v-app>
  </q-layout>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  mdiBell,
  mdiCog,
  mdiFileDocument,
  mdiHome,
} from "@quasar/extras/mdi-v7";

const router = useRouter();
const route = useRoute();

defineOptions({
  name: "MainLayout",
});

// onMounted(() => {
//   router.push({ name: "login" });
// });

const navigationActive = computed(() => {
  return !["login", "register"].includes(route.name);
});

const goToRoute = (routeName) => {
  router.push({ name: routeName });
};
</script>
