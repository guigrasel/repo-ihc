<template>
  <div class="row justify-center">
    <div
      class="row justify-around items-center button col-5 bg-grey-10 q-py-md q-ma-sm"
      @click="$router.push({ path: `${view}/hoje` })"
      >
      <span class="text-subtitle1 text-bold">Hoje</span>
      <span class="bg-primary circle text-bold">{{ lembretes.hoje.length }}</span>
    </div>

    <div
      class="row justify-around items-center button col-5 bg-grey-10 q-py-md q-ma-sm"
      @click="$router.push({ path: `${view}/todos` })"
      >
      <span class="text-subtitle1 text-bold">
        Todos
      </span>
      <span class="bg-primary circle text-bold">{{ lembretes.pendentes.length }}</span>
    </div>

    <div
      class="row justify-around items-center button col-5 bg-grey-10 q-py-md q-ma-sm"
      @click="$router.push({ path: `${view}/concluidos` })"
      >
      <span class="text-subtitle1 text-bold">
        Concluídos
      </span>
      <span class="bg-primary circle text-bold">{{ lembretes.concluidos.length }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useLembretesStore, Lembretes } from '../../stores'

const props = defineProps({
  view: {
    type: String as () => keyof Lembretes,
    required: true
  },
})

const { getLembretes } = useLembretesStore()

const lembretes = getLembretes(props.view)
</script>

<style scoped>
.button {
  border-radius: 8px
}

.circle{
  width: 20px;
  height: 20px;

  border-radius: 100%;
}
</style>