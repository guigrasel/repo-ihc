<template>
  <div class="q-pt-lg">
    <span class="text-white">
      <span class="text-h5 text-bold">
        Carro
      </span>
      
      <ViewButtons view="carro" :lembretes="lembretes.carro"/>
      {{ lembretes.carro }}

      <BtnAddLembrete @click="modal = true"/>
      
      <ModalAddLembrete v-model="modal" title="Novo lembrete" @submit="newLembrete"/>
    </span>
  </div>
</template>

<script setup lang="ts">
import { FormLembrete } from '../../components/ModalAddLembrete.vue';
import { useLembretesStore } from '../../stores'

const { lembretes, novoLembrete } = useLembretesStore()

const modal = ref(false)

function newLembrete(formData: FormLembrete){
  const { data, title, descricao } = formData
  
  novoLembrete('carro', {data, title, descricao})

  modal.value = false
}
</script>