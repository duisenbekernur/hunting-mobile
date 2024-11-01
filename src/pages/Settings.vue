<template>
  <v-container fluid class="pa-5">
    <h1 class="text-h5">Настройки профиля</h1>

    <v-form ref="form" v-model="valid" lazy-validation>
      <!-- Username Field -->
      <v-text-field
        v-model="username"
        :rules="usernameRules"
        label="Имя пользователя"
        required
      />

      <!-- Phone Field -->
      <v-text-field
        v-model="phone"
        :rules="phoneRules"
        label="Телефон"
        required
      />

      <v-btn @click="saveSettings" color="primary" class="mt-4"
        >Сохранить</v-btn
      >
    </v-form>

    <v-btn @click="logout" color="error" class="mt-4">Выйти</v-btn>
  </v-container>
</template>

<script>
import { useAppStore } from "stores/app.store.ts";

export default {
  name: "SettingsPage",
  data() {
    const appStore = useAppStore();

    return {
      valid: false,
      username: appStore.user.name,
      phone: appStore.user.phone,
      usernameRules: [
        (v) => !!v || "Имя пользователя обязательно",
        (v) =>
          (v && v.length <= 20) ||
          "Имя пользователя должно быть менее 20 символов",
      ],
      phoneRules: [
        (v) => !!v || "Телефон обязателен",
        (v) =>
          /^\+?[0-9\s\-]{7,15}$/.test(v) || "Введите корректный номер телефона",
      ],
    };
  },
  computed: {
    appStore() {
      return useAppStore();
    },
  },
  methods: {
    saveSettings() {
      if (this.$refs.form.validate()) {
        // Handle the logic to save the settings
        console.log("Сохранено:", {
          username: this.username,
          phone: this.phone,
        });
        const prevUsers = JSON.parse(localStorage.getItem("users") || "[]");
        const updatedUsers = prevUsers.map((user) => {
          if (user.name === this.appStore.user.name) {
            const newData = {
              name: this.username,
              phone: this.phone,
              password: user.password,
            };
            localStorage.setItem("currentUser", JSON.stringify(newData));
            return newData;
          }
        });

        localStorage.setItem("users", JSON.stringify(updatedUsers));
      }
    },
    logout() {
      // Handle the logout logic (e.g., clear user data, redirect to login)
      console.log("Пользователь вышел");
      // Redirect to login page if needed
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
