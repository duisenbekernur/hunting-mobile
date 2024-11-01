import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    clickedPoint: null,
  }),
  actions: {},
});
