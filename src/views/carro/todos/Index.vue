<template>
  <div class="column q-pt-lg">
    <span class="text-white">
      <span class="text-h5 text-bold">
        Pendentes
      </span>
    </span>

    <LembretesList :items="lembretes.pendentes" view="carro" periodo="pendentes"/>
  </div>
</template>

<script setup lang="ts">
import { useLembretesStore } from '../../../stores'

const { getLembretes } = useLembretesStore()

const lembretes = getLembretes('carro')
</script>