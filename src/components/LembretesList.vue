<template>
  <div class="text-white q-mt-md">
    <div 
      v-if="items.length" 
      v-for="(item, index) in items" 
      :key="index" :class="index === 0 && 'border-top'" 
      class="border-bottom row items-center justify-between text-left q-px-lg fit q-py-sm"
      @click="openModal(item, index)"
      >
      <div class="column">
        <span class="text-subtitle1 text-bold">{{ item.title }}</span>
        <span>{{ formatDate(item.data) }}</span>
      </div>
      <div @click.stop.prevent>
        <q-icon name="mdi-pencil" size="1.5rem" color="primary" class="q-mr-sm" @click="openModalEdit(index, item)"/>
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

  <ModalAddLembrete v-model="modalEditLembrete" is-edit :item="lembrete" :index="indexToEdit" @submit="editarLembrete"/>

  <q-dialog v-model="modal" full-width>
    <q-card class="bg-white text-black">
      <q-card-section class="row items-center">
        <div class="text-h6">{{ lembrete.title }}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup color="black"/>
      </q-card-section>
      <q-separator />
      
      <div class="text-subtitle1 q-pa-md">
        {{ lembrete.descricao }}
      </div>

      <div v-if="!lembrete.concluido && periodo !== 'concluidos'" class="btn full-width row justify-center items-center q-py-sm" @click="concluido">
        <q-icon name="mdi-check" size="1.20rem" color="white" class="q-pa-xs bg-primary icon"/>
        <span class="text-primary text-subtitle-1 text-bold q-ml-sm">Marcar como concluído</span>
      </div>

      <q-separator />
      <div class="text-subtitle1 text-center text-bold">
        {{ formatDate(lembrete.data) }}
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import formatDate from '../composables/formatters';
import { Lembretes, LembretesSeparados } from '../stores';

const { delLembrete, editLembrete, marcarConcluido } = useLembretesStore()

const modal = ref(false)
const modalEditLembrete = ref(false)
const lembrete = ref()
const indexToEdit = ref()
const router = useRouter()

interface Lembrete {
  data: string;
  title: string;
  descricao: string;
  concluido?: boolean
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

function openModalEdit(index: number, item: Lembrete){
  lembrete.value = item;
  indexToEdit.value = index
  modalEditLembrete.value = true;
}

function editarLembrete(item: Lembrete, index: number){
  modalEditLembrete.value = false
  editLembrete(props.view, props.periodo, index, item)

  router.back()
  notifyPositive("Lembrete editado com sucesso!");
}

function concluido(){
  marcarConcluido(props.view, props.periodo, indexToEdit.value)

  router.back()

  notifyPositive("Lembrete marcado como concluído");
}

function openModal(item: Lembrete, index: number){
  modal.value = true
  indexToEdit.value = index
  lembrete.value = item
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

.icon {
  border-radius: 100%;
}
</style>