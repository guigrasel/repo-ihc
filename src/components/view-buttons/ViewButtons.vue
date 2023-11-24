<template>
  <div class="row justify-center">
    <div
      class="button col-5 bg-grey-10 q-py-sm q-ma-sm"
      @click="$router.push({ path: `${view}/hoje` })"
      >
      Hoje
    </div>

    <div
      class="button col-5 bg-grey-10 q-py-sm q-ma-sm"
      @click="$router.push({ path: `${view}/todos` })"
      >
      Todos
    </div>

    <div
      class="button col-5 bg-grey-10 q-py-sm q-ma-sm"
      @click="$router.push({ path: `${view}/concluidos` })"
      >
      Concluídos
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  view: {
    type: String,
    required: true
  },
  lembretes: {
    type: Array as () => Lembrete[],
    default: () => []
  }
})

import { DateTime } from "luxon";

interface Lembrete {
  data: string;
  title: string;
  descricao: string;
}

interface LembretesSeparados {
  hoje: Lembrete[];
  pendentes: Lembrete[];
  concluidos: Lembrete[];
}

function separarLembretes(lembretes: Lembrete[]): LembretesSeparados {
  const hoje: Lembrete[] = [];
  const pendentes: Lembrete[] = [];
  const concluidos: Lembrete[] = [];

  const dataAtual: DateTime = DateTime.now();

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

  return {
    hoje,
    pendentes,
    concluidos
  };
}

const { hoje, pendentes, concluidos } = separarLembretes(props.lembretes);
</script>

<style scoped>
.button {
  border-radius: 8px
}
</style>