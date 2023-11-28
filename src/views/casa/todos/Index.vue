<template>
  <div class="column q-pt-lg">
    <span class="text-white">
      <span class="text-h5 text-bold">
        Todos
      </span>
    </span>

    <LembretesList :items="lembretes.pendentes" view="casa" periodo="pendentes"/>
  </div>
</template>

<script setup lang="ts">
import { useLembretesStore } from '../../../stores'

const { getLembretes } = useLembretesStore()

const lembretes = getLembretes('casa')
</script>