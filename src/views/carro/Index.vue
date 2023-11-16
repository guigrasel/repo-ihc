<template>
  <div class="q-pt-lg">
    <span class="text-white">
      <span class="text-h5 text-bold">
        Carro
      </span>
      
      <ViewButtons view="carro" :lembretes="lembretes.carro"/>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useLembretesStore } from '../../stores'

const { lembretes } = useLembretesStore()
</script>