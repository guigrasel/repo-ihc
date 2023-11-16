import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("lembretes", () => {
  const casa = ref([{ data: '', descricao: ''}])
  const carro = ref([{ data: '', descricao: ''}])
  const eletrodomesticos = ref([{ data: '', descricao: ''}])
  const outros = ref([{ data: '', descricao: ''}])

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
