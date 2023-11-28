import { defineStore } from "pinia";
import { DateTime } from "luxon";

import { FormLembrete } from "../components/ModalAddLembrete.vue";
import { findIndex, isEmpty, isEqual } from "lodash-es";

export interface Lembretes {
  casa: FormLembrete[];
  carro: FormLembrete[];
  eletrodomesticos: FormLembrete[];
  outros: FormLembrete[];
}

interface Lembrete {
  data: string;
  title: string;
  descricao: string;
}

export interface LembretesSeparados {
  hoje: Lembrete[];
  pendentes: Lembrete[];
  concluidos: Lembrete[];
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

    setTimeout(() => {
      location.reload()
    }, 700)
  }
  
  function separarLembretes(lembretes: Lembrete[]): LembretesSeparados {
    const hoje: Lembrete[] = [];
    const pendentes: Lembrete[] = [];
    const concluidos: Lembrete[] = [];
  
    const dataAtual: DateTime = DateTime.now();

    if (!isEmpty(lembretes)) {
      lembretes.forEach((lembrete: Lembrete) => {
        const dataLembrete: DateTime = DateTime.fromISO(lembrete.data);
    
        if (dataLembrete.hasSame(dataAtual, 'day')) {
          hoje.push(lembrete);
          return;
        }
    
        if (dataLembrete < dataAtual) {
          concluidos.push(lembrete);
          return;
        }
    
        pendentes.push(lembrete);
      });
    }

    return {
      hoje,
      pendentes,
      concluidos,
    };
  }


  function getLembretes(tipo: keyof Lembretes) {
    return separarLembretes(lembretes[tipo])
  }

  function delLembrete(tipo: keyof Lembretes, periodo: keyof LembretesSeparados, index: number) {
    const result: LembretesSeparados = separarLembretes(lembretes[tipo])
    const deletar = result[periodo][index]

    const indexDeletar = findIndex(lembretes[tipo], lembrete => isEqual(lembrete, deletar))

    lembretes[tipo].splice(indexDeletar, 1)

    salvarLembretes();
  }

  return {
    lembretes,
    novoLembrete,
    getLembretes,
    delLembrete
  };
});