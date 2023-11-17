import { defineStore } from "pinia";
import { FormLembrete } from "../components/ModalAddLembrete.vue";

interface Lembretes {
  casa: FormLembrete[]
  carro: FormLembrete[]
  eletrodomesticos: FormLembrete[]
  outros: FormLembrete[]
}

export const useLembretesStore = defineStore("lembretes", () => {
  const lembretes: Lembretes = {
    casa: [],
    carro: [],
    eletrodomesticos: [],
    outros: [],
  }

  function novoLembrete(tipo: keyof Lembretes, novoLembrete: FormLembrete) {
    lembretes[tipo].push(novoLembrete)

    notifyPositive('Lembrete adicionado com sucesso!')
  }

  return {
    lembretes,
    novoLembrete
  };
});
