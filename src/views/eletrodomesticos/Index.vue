<template>
  <div class="q-pt-lg">
    <span class="text-white">
      <span class="text-h5 text-bold">
        Eletrodomésticos
      </span>
      
      <ViewButtons view="eletrodomesticos" :lembretes="lembretes.eletrodomesticos"/>

      <BtnAddLembrete @click="modal = true"/>
      
      <ModalAddLembrete v-model="modal" title="Novo lembrete"/>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useLembretesStore } from '../../stores'

const { lembretes } = useLembretesStore()

const modal = ref(false)
</script>