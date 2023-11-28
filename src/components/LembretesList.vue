<template>
  <div class="text-white q-mt-md">
    <div v-for="(item, index) in items" :key="index" class="item row items-center justify-between text-left q-px-lg fit q-py-sm">
      <div class="column">
        <span class="text-subtitle1 text-bold">{{ item.title }}</span>
        <span>{{ item.data }}</span>
      </div>
      <div>
        <q-icon name="mdi-delete" size="1.5rem" color="red" @click="deletarLembrete(index), $router.back()"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
.item {
  border-bottom: 2px solid rgb(44, 44, 44);
  border-top: 2px solid rgb(44, 44, 44);
}
</style>