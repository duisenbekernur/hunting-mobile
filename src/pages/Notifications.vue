<template>
  <v-container class="d-flex align-start justify-center" fluid>
    <v-card height="90vh">
      <v-card-title class="text-h5">Уведомления</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item-group>
            <v-list-item
              v-for="notification in notifications"
              :key="notification.id"
              :class="{ expired: notification.isExpired }"
              @click="viewDetails(notification.id)"
              two-line
            >
              <v-list-item-content>
                <v-list-item-title>{{ notification.title }}</v-list-item-title>
                <v-list-item-subtitle>
                  {{ notification.message }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon :icon="mdiEye" @click.stop></v-icon>
              </v-list-item-action>
              <v-list-item-subtitle class="text-right">
                {{ formatDate(notification.date) }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mdiEye } from "@quasar/extras/mdi-v7";

export default {
  name: "notifications-page",
  data() {
    const notifications = JSON.parse(
      localStorage.getItem("notifications") || "[]",
    );

    return {
      notifications,
    };
  },
  computed: {
    mdiEye() {
      return mdiEye;
    },
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    viewDetails(id) {
      // Logic to view notification details
      console.log("Viewing details for notification:", id);
    },
  },
};
</script>

<style scoped>
.v-container {
  margin-top: 20px;
}

.expired {
  background-color: #ffebee; /* Light red background for expired notifications */
  border-left: 5px solid #f44336; /* Red border for emphasis */
}

.v-list-item {
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.v-list-item:hover {
  background-color: #f5f5f5; /* Light gray on hover */
  transform: scale(1.01); /* Slightly enlarge on hover */
}
</style>
