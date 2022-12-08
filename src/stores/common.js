import { defineStore } from "pinia";

export const commonStore = defineStore("common", {
  state: () => ({
    data: null,
  }),
  getters: {
    getData() {
      return this.data;
    },
  },
  actions: {
    updateData(data) {
      this.data = data;
    },
  },
});
