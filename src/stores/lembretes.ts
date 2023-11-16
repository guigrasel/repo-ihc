import { defineStore } from "pinia";
import { ref } from "vue";

export const useLembretesStore = defineStore("lembretes", () => {
  const lembretes = {
    casa: [],
    carro: [],
    eletrodomesticos: [],
    outros: [],
  }

  /**
   * `incrementAge` is a function that takes no arguments and returns nothing
   */
  // function incrementAge() {
  //   age.value += 1;
  // }

  return {
    lembretes
  };
});
