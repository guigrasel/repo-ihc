<template>
  <div class="q-pt-lg">
    <span class="text-white">
      <span class="text-h5 text-bold">
        Pendentes
      </span>
    </span>

    <LembretesList :items="lembretes.pendentes" view="eletrodomesticos" periodo="pendentes"/>
  </div>
</template>

<script setup lang="ts">
import { useLembretesStore } from '../../../stores'

const { getLembretes } = useLembretesStore()

const lembretes = getLembretes('eletrodomesticos')
</script>