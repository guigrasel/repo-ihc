<template>
  <div class="q-pt-lg">
    <span class="text-white">
      <span class="text-h5 text-bold">
        Outros
      </span>
      
      <ViewButtons view="outros"/>

      <BtnAddLembrete @click="modal = true"/>
      
      <ModalAddLembrete v-model="modal" title="Novo lembrete" @submit="newLembrete"/>
    </span>
  </div>
</template>

<script setup lang="ts">
import { FormLembrete } from '../../components/ModalAddLembrete.vue'
import { useLembretesStore } from '../../stores'

const { novoLembrete } = useLembretesStore()

const modal = ref(false)

function newLembrete(formData: FormLembrete){
  const { data, title, descricao } = formData
  
  novoLembrete('outros', {data, title, descricao})

  modal.value = false
}
</script>