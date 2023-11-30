<template>
  <div class="text-white q-mt-md">
    <div v-if="items.length" v-for="(item, index) in items" :key="index" :class="index === 0 && 'border-top'" class="border-bottom row items-center justify-between text-left q-px-lg fit q-py-sm">
      <div class="column">
        <span class="text-subtitle1 text-bold">{{ item.title }}</span>
        <span>{{ formatDate(item.data) }}</span>
      </div>
      <div>
        <q-icon name="mdi-delete" size="1.5rem" color="red" @click="deletarLembrete(index), $router.back()"/>
      </div>
    </div>
    
    <div v-else>
      <div class="column items-center border q-mx-lg q-pa-sm q-mt-lg" @click="$router.back()">
        <q-icon name="mdi-emoticon-sad-outline" size="5rem"/>
        <span class="text-subtitle1 q-mt-md text-bold q-px-lg line-heigth">Nenhum lembrete encontrado, clique aqui para voltar.</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import formatDate from '../composables/formatters';
import { Lembretes, LembretesSeparados } from '../stores';

const { delLembrete } = useLembretesStore()

interface Lembrete {
  data: string;
  title: string;
  descricao: string;
}

const props = defineProps({
  items: {
    type: Array as () => Lembrete[],
    default: () => []
  },
  view :{
    type: String as () => keyof Lembretes,
    default: () => ''
  },
  periodo: {
    type: String as () => keyof LembretesSeparados,
    default: () => ''
  },
})

function deletarLembrete(index: number){
  delLembrete(props.view, props.periodo, index)

  notifyPositive("Lembrete deletado com sucesso!");
}
</script>

<style scoped>
.border-bottom {
  border-bottom: 2px solid rgb(44, 44, 44);
}

.border-top {
  border-top: 2px solid rgb(44, 44, 44);
}

.line-heigth {
  line-height: 1.1;
}

.border {
  border: 3px solid white;
  border-radius: 10px;
}
</style>