import { defineStore } from "pinia";
import { FormLembrete } from "../components/ModalAddLembrete.vue";

interface Lembretes {
  casa: FormLembrete[];
  carro: FormLembrete[];
  eletrodomesticos: FormLembrete[];
  outros: FormLembrete[];
}

export const useLembretesStore = defineStore("lembretes", () => {
  const lembretes: Lembretes = JSON.parse(localStorage.getItem("lembretes") || "{}") || {
    casa: [],
    carro: [],
    eletrodomesticos: [],
    outros: [],
  };

  function salvarLembretes() {
    localStorage.setItem("lembretes", JSON.stringify(lembretes));
  }

  function novoLembrete(tipo: keyof Lembretes, novoLembrete: FormLembrete) {
    // Garanta que lembretes[tipo] seja inicializado como um array vazio se for undefined
    if (!lembretes[tipo]) {
      lembretes[tipo] = [];
    }

    lembretes[tipo].push(novoLembrete);

    salvarLembretes();

    notifyPositive("Lembrete adicionado com sucesso!");
  }

  return {
    lembretes,
    novoLembrete,
  };
});