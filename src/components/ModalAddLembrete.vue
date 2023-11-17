<template>
  <q-dialog persistent full-width>
    <q-card>
      <q-card-section class="row items-center">
        <div class="text-h5">{{ title }}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-separator />

      <q-card-section>
        <form @submit.prevent="submit">
          <q-input outlined v-model="form.data" type="date"/>
          <q-input outlined v-model="form.title" label="Título" class="q-mt-md"/>
          <q-input outlined v-model="form.descricao" label="Descrição" type="textarea" class="q-mt-md"/>

          <div class="row justify-end q-mt-md">
            <q-btn label="Salvar" color="primary" no-caps type="submit"/>
          </div>
        </form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { Ref } from 'vue'

export interface FormLembrete {
  data: string
  title: string
  descricao: string
}

defineProps({
  title: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['submit'])

const form: Ref<FormLembrete> = ref({data: '', title: '', descricao: ''})

function submit() {
  emit('submit', form.value)
}
</script> 