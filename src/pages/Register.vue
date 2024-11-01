<template>
  <v-container class="d-flex align-center justify-center" fluid>
    <v-card class="pa-8" max-width="400px">
      <v-card-title class="text-h5">Регистрация</v-card-title>
      <v-card-text>
        <v-form ref="registerForm" v-model="valid" @submit.prevent="submitForm">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Имя"
            required
          ></v-text-field>
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
          <v-text-field
            v-model="confirmPassword"
            :rules="confirmPasswordRules"
            label="Подтверждение пароля"
            type="password"
            required
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            color="primary"
            class="mt-4"
            @click="submitForm"
          >
            Зарегистрироваться
          </v-btn>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="goToLogin">Уже есть аккаунт? Войти</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "register-page",
  setup() {
    const name = ref("");
    const phone = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const valid = ref(false);

    const nameRules = [
      (v) => !!v || "Имя обязательно",
      (v) => v.length >= 3 || "Имя должно содержать не менее 3 символов",
    ];
    const phoneRules = [(v) => !!v || "Телефон обязателен"];
    const passwordRules = [
      (v) => !!v || "Пароль обязателен",
      (v) => v.length >= 6 || "Пароль должен содержать не менее 6 символов",
    ];
    const confirmPasswordRules = [
      (v) => !!v || "Подтверждение пароля обязательно",
      (v) => v === password.value || "Пароли должны совпадать",
    ];

    const router = useRouter();

    const submitForm = () => {
      const prevUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const newUser = {
        name: name.value,
        phone: phone.value,
        password: password.value,
      };
      localStorage.setItem("users", JSON.stringify([...prevUsers, newUser]));
      router.push({ name: "login" });
      // Здесь вы можете добавить логику регистрации, например, вызов API
    };

    const goToLogin = () => {
      router.push("/login"); // При необходимости измените маршрут
    };

    return {
      name,
      phone,
      password,
      confirmPassword,
      valid,
      nameRules,
      phoneRules,
      passwordRules,
      confirmPasswordRules,
      submitForm,
      goToLogin,
    };
  },
};
</script>

<style scoped>
.v-container {
  height: 100vh;
}
</style>
