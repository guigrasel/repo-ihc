<template>
  <div class="column q-pt-lg">
    <span class="text-white">
      <span class="text-h5 text-bold">
        Hoje
      </span>
    </span>

    <LembretesList :items="lembretes.hoje" view="casa" periodo="hoje"/>
  </div>
</template>

<script setup lang="ts">
import { useLembretesStore } from '../../../stores'

const { getLembretes } = useLembretesStore()

const lembretes = getLembretes('casa')
</script>