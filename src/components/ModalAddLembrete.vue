<template>
  <q-dialog persistent full-width>
    <q-card>
      <q-card-section class="row items-center">
        <div class="text-h5 text-black">{{isEdit ? 'Editar lembrete' : 'Adicionar lembrete'}}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup color="black"/>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <q-form @submit.prevent="submit">
          <q-input outlined v-model="form.data" label="Data" type="date" :rules="[(val) => (!!val && val.length > 0) || 'Campo requerido']"/>
          <q-input outlined v-model="form.title" label="Título" class="q-mt-md" :rules="[(val) => (!!val && val.length > 0) || 'Campo requerido']"/>
          <q-input outlined v-model="form.descricao" label="Descrição" type="textarea" class="q-mt-md" :rules="[(val) => (!!val && val.length > 0) || 'Campo requerido']"/>

          <div class="row justify-end q-mt-md">
            <q-btn label="Salvar" color="primary" no-caps type="submit"/>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import { Lembretes, LembretesSeparados } from '../stores'

export interface FormLembrete {
  data: string
  title: string
  descricao: string
  concluido?: boolean
}

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  item: {
    type: Object as () => FormLembrete,
    default: {data: '', title: '', descricao: ''}
  },
  isEdit: {
    type: Boolean,
    default: false
  },
  view: {
    type: String as () => keyof Lembretes,
    default: () => ''
  },
  periodo: {
    type: String as () => keyof LembretesSeparados,
    default: () => ''
  },
  index: {
    type: Number,
    default: null
  },
})

const emit = defineEmits(['submit'])


const form: Ref<FormLembrete> = ref(props.item)

function submit() {
  if(!props.isEdit){
    emit('submit', form.value)
    return
  }
  emit('submit', form.value, props.index)

  form.value = {data: '', title: '', descricao: ''}
}
</script> 