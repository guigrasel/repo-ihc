import { defineStore } from "pinia";
import { ref } from "vue";

export const useLembretesStore = defineStore("lembretes", () => {
  const casa = ref([])
  const carro = ref([])
  const eletrodomesticos = ref([])
  const outros = ref([])

  /**
   * `incrementAge` is a function that takes no arguments and returns nothing
   */
  // function incrementAge() {
  //   age.value += 1;
  // }

  return {
    casa,
    carro,
    eletrodomesticos,
    outros
  };
});
