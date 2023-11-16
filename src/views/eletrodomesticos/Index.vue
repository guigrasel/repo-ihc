<template>
  <div class="q-pt-lg">
    <span class="text-white">
      <span class="text-h5 text-bold">
        Eletrodomésticos
      </span>
      
      <ViewButtons view="eletrodomesticos" :lembretes="eletrodomesticos"/>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useLembretesStore } from '../../stores'

const { eletrodomesticos } = useLembretesStore()
</script>