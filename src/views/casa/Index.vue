<template>
  <div class="q-pt-lg">
    <span class="text-white">
      <span class="text-h5 text-bold">
        Casa
      </span>
      
      <ViewButtons view="casa" :lembretes="casa"/>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useLembretesStore } from '../../stores'

const { casa } = useLembretesStore()
</script>