import { defineStore } from "pinia";

const user = JSON.parse(localStorage.getItem("currentUser"));

export const useAppStore = defineStore("app", {
  state: () => ({
    clickedPoint: null,
    user: user,
  }),
  actions: {},
});
