<template>
  <div class="column q-pt-lg">
    <span class="text-white">
      <span class="text-h5 text-bold">
        Concluídos
      </span>
    </span>

    <LembretesList :items="lembretes.concluidos" view="outros" periodo="concluidos"/>
  </div>
</template>

<script setup lang="ts">
import { useLembretesStore } from '../../../stores'

const { getLembretes } = useLembretesStore()

const lembretes = getLembretes('outros')
</script>