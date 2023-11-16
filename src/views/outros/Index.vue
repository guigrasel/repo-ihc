<template>
  <div class="q-pt-lg">
    <span class="text-white">
      <span class="text-h5 text-bold">
        Outros
      </span>
      
      <ViewButtons view="outros" :lembretes="outros"/>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useLembretesStore } from '../../stores'

const { outros } = useLembretesStore()
</script>