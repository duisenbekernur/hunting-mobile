<template>
  <v-container class="d-flex align-center justify-center" fluid>
    <v-card class="pa-8" max-width="400px">
      <v-card-title class="text-h5">Вход</v-card-title>
      <v-card-text>
        <v-form ref="loginForm" v-model="valid" @submit.prevent="submitForm">
          <v-text-field
            v-model="phone"
            :rules="phoneRules"
            label="Телефон"
            type="phone"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Пароль"
            type="password"
            required
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            color="primary"
            class="mt-4"
            @click="submitForm"
          >
            Войти
          </v-btn>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="goToRegister"
          >Нет аккаунта? Зарегистрироваться</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAppStore } from "stores/app.store.ts";

export default {
  name: "login-page",
  setup() {
    const phone = ref("");
    const password = ref("");
    const valid = ref(false);

    const phoneRules = [(v) => !!v || "Телефон обязателен"];

    const passwordRules = [(v) => !!v || "Пароль обязателен"];

    const router = useRouter();
    const appStore = useAppStore();

    const submitForm = () => {
      const prevUsers = JSON.parse(localStorage.getItem("users") || "[]");
      let correct = false;

      prevUsers.forEach((user) => {
        if (user.phone === phone.value && user.password === password.value) {
          correct = true;
          appStore.user = user;
          localStorage.setItem("currentUser", JSON.stringify(user));
        }
      });

      if (correct) {
        router.push({ name: "home" });
      }
    };

    const goToRegister = () => {
      router.push("/register"); // При необходимости измените маршрут
    };

    return {
      phone,
      password,
      valid,
      phoneRules,
      passwordRules,
      submitForm,
      goToRegister,
    };
  },
};
</script>

<style scoped>
.v-container {
  height: 100vh;
}
</style>
